import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import UserContext from "../contexts/UserContext";

const AssetNew = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [userLog, setUserLog] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  let { getUserAssets } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getUserAssets(params.user_id);
        if (isMounted) {
          setUserLog(result);
        }
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
            console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  const [newAsset, setNewAsset] = useState({
    asset_id: params.asset_id,
    message: "",
    imageLink: "",
    videoLink: ""
  });

  let { message, imageLink, videoLink } = newAsset;

  const { createUserAsset } = useContext(AssetContext);

  let { asset_id } = newAsset;

  function handleChange(event) {
    setNewAsset((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function create() {
    if (asset_id === undefined) {
      return createUserAsset(newAsset);
    }
  }

  async function handleSubmit() {
    setIsUpdating(true);
    try {
      await create(newAsset);
      setIsUpdating(false);
      navigate("/assets");
    } catch (error) {
      console.log(error);
      window.alert("You need to sign in to post a message!");
      setIsUpdating(false);
    }
  }

  return (
    <div
      style={{
        padding: "10px",
        color: "white"
      }}
    >
      <div className="container px-lg-5">
        <form onSubmit={handleSubmit} key={params.asset_Id}>
          <input
            className="share-input"
            type="text"
            name="message"
            value={message}
            placeholder={`...What's on your mind, ${userLog.first_name}?`}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
        </form>

        {isUpdating && (
          <Spinner variant="'success" animation="border" role="status" />
        )}
      </div>
    </div>
  );
};

export default AssetNew;

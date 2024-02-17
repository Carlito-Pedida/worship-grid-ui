import React, { useContext, useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Spinner, Stack } from "react-bootstrap";
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
    setIsUpdating(true); // Set updating status to true when data update starts
    try {
      await create(newAsset);
      setIsUpdating(false); // Set updating status to false when data update completes
      navigate("/assets");
    } catch (error) {
      console.log(error);
      window.alert("You need to sign in to create assets!");
      setIsUpdating(false); // Set updating status to false on error
    }
  }

  // function handleSubmit() {
  //   create(newAsset)
  //     .then(() => {
  //       navigate("/assets");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       window.alert("You need to sign in to create assets!");
  //     });
  // }

  return (
    <div
      className="container"
      style={{
        padding: "30px",

        color: "white"
        // opacity: "85%"
      }}
    >
      <div>
        <form onSubmit={handleSubmit} key={params.asset_Id}>
          <input
            size={75}
            className="share-input p-2 me-2"
            type="text"
            name="message"
            value={message}
            placeholder={`...What do you have in mind ${userLog.first_name}?`}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // Prevents the default form submission
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

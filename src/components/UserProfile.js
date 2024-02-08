import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import moment from "moment";
import "../styles/UserProfile.css";
import { Button, Card } from "react-bootstrap";

const UserProfile = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [userAssets, setUserAssets] = useState("");
  const [userLog, setUserLog] = useState([]);
  //console.log(userAssets);
  //console.log(userLog);

  let { getOneUser } = useContext(UserContext);
  let { deleteUserAsset, asset } = useContext(AssetContext);

  // useEffect(() => {
  //   let isMounted = true;

  //   async function fetchData() {
  //     try {
  //       const result = await getAllUserAssets();
  //       if (isMounted) {
  //         setUserAssets(result);
  //       }
  //     } catch (error) {
  //       if (isMounted) {
  //         if (error.response && error.response.status === 404) {
  //           console.clear();
  //         }
  //       }
  //     }
  //   }

  //   fetchData();

  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   async function fetchData() {
  //     await getAllUserAssets().then((result) => setUserLog(result));
  //   }
  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchData() {
      await getOneUser(params.user_id).then((result) => setUserLog(result));
    }
    fetchData();
  }, [getOneUser, params.user_id]);

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Profile";
  }, []);

  function handleDelete(asset_id) {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      deleteUserAsset(asset_id)
        .then(() => {
          navigate("/assets");
        })
        .catch((error) => {
          console.log(error);
          window.alert("You need to sign in to perform this operation");
          navigate("/assets");
        });
    }
  }

  const [show, setShow] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleEdit = (asset) => {
  //   setUpdatedAsset(asset);
  //   handleShow();
  // };

  // const handleEditAssetChange = (updatedAsset) => {
  //   // Update the state in AssetList
  //   setUpdatedAsset(updatedAsset);
  // };

  return (
    <div>
      <div className="user-profile">
        <div className="profile-info">
          <img src={userLog.avatar} alt={userLog.username} />
          <h2>
            {userLog.first_name} {userLog.last_name}
          </h2>
          <p>@{userLog.username}</p>
          <p>{""}</p>
          <p>
            {userLog.city} {userLog.state} {userLog.zipcode}
          </p>
          <p>{userLog.position}</p>
          <p>{userLog.email}</p>
          <p>{userLog.createdAt}</p>
          <p>
            Member Since:{" "}
            {moment.parseZone(userLog.createdAt).local().format("LL")}
          </p>
        </div>
        <div className="container user-assets">
          {asset.map((a, id) => {
            return (
              <Card key={id} className="text-center">
                <div>
                  {userLog && a.user_id == userLog.user_id ? (
                    <>
                      <Card.Header>{a.UserDatum.first_name}</Card.Header>
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>{a.message}</Card.Text>
                      </Card.Body>
                      <Card.Footer
                        key={a.UserResponses.response_id}
                        className="text-muted"
                      >
                        {a.UserResponses && a.UserResponses.length > 0 ? (
                          <div>
                            {a.UserResponses.map((r, idx) => (
                              <div key={idx}>{r.reply}</div>
                            ))}
                          </div>
                        ) : (
                          <>No Reply yet</>
                        )}
                      </Card.Footer>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

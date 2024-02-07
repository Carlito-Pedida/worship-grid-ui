import React, { useContext, useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import NewsBanner from "../props/NewsBanner";
import moment from "moment";
import AssetEdit from "./AssetEdit";
import { Button, Modal } from "react-bootstrap";
import UserContext from "../contexts/UserContext";
import "../styles/AssetList.css";

const AssetList = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [userLog, setUserLog] = useState([]);

  let { getUserAssets } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getUserAssets();
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

  let [updatedAsset, setUpdatedAsset] = useState({
    asset_id: params.user_id,
    message: "",
    imageLink: "",
    videoLink: ""
  });

  let { getOneUserAsset, updateUserAsset, getAllUserAssets, deleteUserAsset } =
    useContext(AssetContext);

  useEffect(() => {
    if (params.asset_id === undefined) return;
    async function fetch() {
      await getOneUserAsset(params.asset_id).then((oneAsset) =>
        setUpdatedAsset(oneAsset)
      );
    }
    fetch();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    updateUserAsset(updatedAsset, params.asset_id)
      .then(() => {
        if (!updatedAsset.ok) {
          alert("Update Successful!");
        }
        navigate("/assets");
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("You are not authorized to perform this action!");
        navigate("/assets");
      });
  }

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

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Convo";

    getAllUserAssets();
  }, []);

  const [show, setShow] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = (asset) => {
    setUpdatedAsset(asset);
    handleShow();
  };

  const handleEditAssetChange = (updatedAsset) => {
    // Update the state in AssetList
    setUpdatedAsset(updatedAsset);
  };

  return (
    <>
      <div>
        <AssetContext.Consumer>
          {({ asset }) => {
            return (
              <>
                {userLog.user_id == params.user_id ? (
                  <div>
                    <NewsBanner
                      title="JOIN THE CONVERSATION!"
                      subTitle1="See what's latest in the worship community in your area!"
                      buttonText="JOIN THE CONVERSATION!"
                    />{" "}
                  </div>
                ) : (
                  <></>
                )}

                <div
                  style={{
                    // border: "solid #2c5728 10px",
                    backgroundColor: "dimgrey",
                    opacity: "90%"
                  }}
                >
                  <div style={{ color: "white" }}>
                    <h1>Asset List</h1>
                    <Link to="/create">Create New Asset</Link>

                    <div>
                      {asset
                        .sort(
                          (a, b) =>
                            moment(b.createdAt).valueOf() -
                            moment(a.createdAt).valueOf()
                        )
                        .map((a, i) => {
                          return (
                            <div
                              style={{
                                border: "solid #2c5728 10px",
                                backgroundColor: "dimgrey",

                                padding: "20px",
                                borderRadius: "10px",
                                margin: "auto",
                                marginTop: "10px",
                                // marginBottom: "10px",
                                width: "50%",
                                position: "relative"
                              }}
                              key={i}
                            >
                              <div
                                style={{
                                  color: "white"
                                }}
                              >
                                <span>
                                  <img
                                    alt=""
                                    style={{
                                      borderRadius: "50%",
                                      border: "solid 5px",

                                      borderColor: "white",
                                      marginLeft: "5px",
                                      marginRight: "5px"
                                    }}
                                    src={a.UserDatum.avatar}
                                    size="40"
                                    round="true"
                                    height={65}
                                    width={65}
                                  />
                                </span>

                                <h2 style={{ color: "white" }}>
                                  {a.UserDatum.first_name} |{" "}
                                  {a.UserDatum.last_name}
                                </h2>

                                <p>{a.message}</p>
                                <p>{a.imageLink}</p>
                                <p>{a.videoLink}</p>

                                {a.UserResponses &&
                                a.UserResponses.length > 0 ? (
                                  <div key={a.UserResponses.responses_id}>
                                    {a.UserResponses.map((r, i) => (
                                      <div
                                        style={{
                                          backgroundColor: "dimgray",
                                          padding: "2px",
                                          borderRadius: "15px",
                                          color: "white",
                                          marginTop: "5px"
                                        }}
                                        key={i}
                                      >
                                        <p>
                                          <strong>
                                            {r.UserDatum.username}
                                          </strong>
                                        </p>
                                        <p>{r.reply}</p>
                                        <p>{r.reactions}</p>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <>No replies yet!</>
                                )}
                              </div>
                              <div className="d-flex justify-content-center">
                                <Link
                                  style={{
                                    color: "orange",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                  }}
                                  className="p-3"
                                  to={`/asset/${a.asset_id}/reply`}
                                >
                                  Reply
                                </Link>
                                <br />
                                <Link
                                  style={{
                                    color: "lightblue",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                  }}
                                  className="p-3"
                                  to={"#"}
                                  onClick={() => {
                                    handleShow(true);
                                    setSelectedAsset(a);
                                  }}
                                >
                                  Edit
                                </Link>
                                <br />
                                <Link
                                  style={{
                                    color: "red",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    fontSize: "20px"
                                  }}
                                  className="p-3"
                                  to={"#"}
                                  onClick={handleDelete.bind(
                                    this,
                                    a.asset_id,
                                    a.UserDatum.user_id
                                  )}
                                >
                                  Delete
                                </Link>
                                <br />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </>
            );
          }}
        </AssetContext.Consumer>
        {/* Edit Asset Modal */}
      </div>
      <div>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header
            style={{ backgroundColor: "#366532" }}
            className="divider d-flex align-items-center"
          >
            <Modal.Title
              style={{ color: "white" }}
              className="text-center mx-3 mb-0"
            >
              Edit Assets
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#366532" }}>
            <AssetEdit
              asset={selectedAsset}
              handleClose={handleClose}
              handleSubmit={handleSubmit}
              onAssetUpdate={handleEditAssetChange}
            />
          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: "#366532" }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default AssetList;

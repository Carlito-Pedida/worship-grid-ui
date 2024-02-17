import React, { useContext, useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import NewsBanner from "../props/NewsBanner";
import moment from "moment";
import AssetEdit from "./AssetEdit";
import { Button, Card, CardFooter, CardHeader, Modal } from "react-bootstrap";
import UserContext from "../contexts/UserContext";
import "../styles/AssetList.css";
import AssetNew from "./AssetNew";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDeleteLeft,
  faEdit,
  faReply,
  faTrashAlt,
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const AssetList = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [userLog, setUserLog] = useState([]);

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

                <div className="message-board p-5">
                  <div
                    className="message-frame container pt-3 pb-3"
                    style={{ color: "white" }}
                  >
                    <h1>Message Board</h1>
                    {userLog.user_id === params.user_id ? (
                      <></>
                    ) : (
                      <>
                        <AssetNew />
                      </>
                    )}

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
                                border: "solid #b7b7b7 3px",
                                backgroundColor: "#767676",

                                padding: "40px",
                                borderRadius: "10px",
                                margin: "auto",
                                marginTop: "10px",
                                // marginBottom: "10px",
                                width: "65%",
                                position: "relative"
                              }}
                              key={i}
                            >
                              <div
                                style={{
                                  color: "black"
                                }}
                              >
                                <Card
                                  className="message-card"
                                  style={{
                                    borderRadius: "5px"
                                  }}
                                >
                                  <Card.Header className="message-head">
                                    <div>
                                      <img
                                        alt=""
                                        style={{
                                          borderRadius: "50%"
                                        }}
                                        src={a.UserDatum.avatar}
                                        size="40"
                                        round="true"
                                        height={47}
                                        width={47}
                                      />
                                    </div>
                                    <div className="message-date">
                                      {a.UserDatum.first_name}{" "}
                                      {a.UserDatum.last_name}
                                      <div>
                                        {moment
                                          .parseZone(a.createdAt)
                                          .local()
                                          .fromNow(true)}{" "}
                                        ago...
                                      </div>
                                    </div>
                                  </Card.Header>
                                  <Card.Body
                                    style={{
                                      backgroundColor: "gray",
                                      textAlign: "center",
                                      alignItems: "center",
                                      paddingTop: "50px",
                                      paddingBottom: "50px",
                                      paddingLeft: "30px",
                                      paddingRight: "30px",
                                      color: "white"
                                    }}
                                  >
                                    <div>
                                      <h6>{a.message}</h6>
                                    </div>
                                  </Card.Body>
                                  <Card.Footer>
                                    <hr />
                                    <div className="d-flex justify-content-center">
                                      <Link
                                        style={{
                                          color: "orange",
                                          textDecoration: "none",
                                          fontWeight: "bold",
                                          fontSize: "20px"
                                        }}
                                        className="mx-3"
                                        to={`/asset/${a.asset_id}/reply`}
                                        title="Reply Button"
                                      >
                                        <FontAwesomeIcon
                                          className="search-tool-icon"
                                          icon={faReply}
                                          size="sm"
                                          color="green"
                                        />
                                      </Link>
                                      <br />
                                      <Link
                                        style={{
                                          textDecoration: "none",
                                          fontWeight: "bold",
                                          fontSize: "20px"
                                        }}
                                        className="mx-3"
                                        to={"#"}
                                        onClick={() => {
                                          handleShow(true);
                                          setSelectedAsset(a);
                                        }}
                                        title="Edit Button"
                                      >
                                        <FontAwesomeIcon
                                          className="search-tool-icon"
                                          icon={faEdit}
                                          size="sm"
                                          color="gray"
                                        />
                                      </Link>
                                      <br />
                                      <Link
                                        style={{
                                          color: "red",
                                          textDecoration: "none",
                                          fontWeight: "bold",
                                          fontSize: "20px"
                                        }}
                                        className="mx-3"
                                        to={"#"}
                                        onClick={handleDelete.bind(
                                          this,
                                          a.asset_id,
                                          a.UserDatum.user_id
                                        )}
                                        title="Delete Button"
                                      >
                                        <FontAwesomeIcon
                                          className="search-tool-icon"
                                          icon={faTrashAlt}
                                          size="sm"
                                          color="red"
                                        />
                                      </Link>

                                      <br />
                                    </div>
                                    <hr />
                                  </Card.Footer>
                                </Card>

                                {a.UserResponses &&
                                a.UserResponses.length > 0 ? (
                                  <div key={a.UserResponses.responses_id}>
                                    {a.UserResponses.map((r, i) => (
                                      <div className="reply-card" key={i}>
                                        <div>
                                          <img
                                            alt=""
                                            style={{
                                              borderRadius: "50%"
                                            }}
                                            src={r.UserDatum.avatar}
                                            size="40"
                                            round="true"
                                            height={40}
                                            width={40}
                                          />
                                        </div>
                                        <div
                                          style={{
                                            boxShadow: "2px 3px #b7b7b7"
                                          }}
                                          className="reply-text"
                                        >
                                          {r.UserDatum.first_name}{" "}
                                          {r.UserDatum.last_name}
                                          <div>
                                            {r.reply} {r.reactions}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <>No replies yet!</>
                                )}
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

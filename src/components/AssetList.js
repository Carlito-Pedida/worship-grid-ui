import React, { useContext, useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";
import { Link, useNavigate } from "react-router-dom";
import NewsBanner from "../props/NewsBanner";
import moment from "moment";
import AssetEdit from "./AssetEdit";
import { Button, Modal } from "react-bootstrap";

const AssetList = () => {
  let navigate = useNavigate();
  let { deleteUserAsset } = useContext(AssetContext);

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
  }, []);

  const [show, setShow] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);

  console.log(selectedAsset);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <NewsBanner
          title="JOIN THE CONVERSATION!"
          subTitle1="See what's latest in the worship community in your area!"
          buttonText="GET ACCESS!"
        />{" "}
        <AssetContext.Consumer>
          {({ asset }) => {
            return (
              <div>
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
                            border: "solid",
                            borderBlockColor: "dimgrey",
                            padding: "20px",
                            borderRadius: "10px",
                            margin: "auto",
                            marginTop: "10px",
                            width: "50%",
                            position: "relative"
                          }}
                          key={i}
                        >
                          <div>
                            <span>
                              <img
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
                            <h2>
                              {a.UserDatum.first_name} | {a.UserDatum.last_name}
                            </h2>
                            {/* <img src={a.imageLink} alt="here goes the images" /> */}

                            <p>{a.message}</p>
                            <p>{a.imageLink}</p>
                            <p>{a.videoLink}</p>

                            {a.UserResponses && a.UserResponses.length > 0 ? (
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
                                      <strong>{r.UserDatum.username}</strong>
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
                          {/* Video Screen here<div>{a.videoLink}</div> */}
                          <Link to={`asset/${a.asset_id}/reply`}>reply</Link>
                          <br />
                          <Link
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
                            to={"#"}
                            onClick={handleDelete.bind(
                              this,
                              a.asset_id,
                              a.UserDatum.user_id
                            )}
                          >
                            delete
                          </Link>
                          <br />
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          }}
        </AssetContext.Consumer>
        {/* Edit Asset Modal */}
      </div>
      <div>
        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header
            className="d-flex text-center"
            style={{ backgroundColor: "#366532" }}
            closeButton
          >
            <Modal.Title
              style={{ color: "white" }}
              className="divider text-center mb-2"
            >
              Edit Assets
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#366532" }}>
            <AssetEdit
              asset_id={selectedAsset?.asset_id}
              message={selectedAsset?.message}
              imageLink={selectedAsset?.imageLink}
              videoLink={selectedAsset?.videoLink}
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

import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import useNode from "../providers/useNode";
import Comment from "./Comment";
import "../styles/UserProfTop.css";
import "../styles/Comment.css";
import AssetNew from "../components/AssetNew";
import { Link, useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AssetContext from "../contexts/AssetContext";

const comments = {
  id: 1,
  items: []
};

function UserProfData(props) {
  let navigate = useNavigate();
  let {
    userImage,
    firstName,
    lastName,
    city,
    state,
    teamPosition,
    username,
    memberSince
  } = props;

  const [commentsData, setCommentsData] = useState(comments);

  const { insertNode, editNode, deleteNode } = useNode();

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };

  let params = useParams();
  const [userLog, setUserLog] = useState([]);

  let { getOneUser } = useContext(UserContext);
  let { deleteUserAsset, asset } = useContext(AssetContext);

  useEffect(() => {
    async function fetchData() {
      await getOneUser(params.user_id).then((result) => setUserLog(result));
    }
    fetchData();
  }, [getOneUser, params.user_id]);

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

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col lg="9" xl="7">
            <Card>
              <div
                className="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#000", height: "200px" }}
              >
                <div
                  className="ms-4 mt-5 d-flex flex-column"
                  style={{ height: "150px", width: "150px" }}
                >
                  <Image
                    src={userImage}
                    alt="Generic placeholder image"
                    className="mt-4 mb-2 img-thumbnail"
                    fluid
                    style={{ width: "150px", height: "150px", zIndex: "1" }}
                    roundedCircle
                  />
                  <Button
                    outline
                    color="dark"
                    style={{
                      height: "36px",
                      overflow: "visible",
                      marginTop: "18px"
                    }}
                  >
                    Edit profile
                  </Button>
                </div>

                <div className="ms-3" style={{ marginTop: "130px" }}>
                  <h5 tag="h5">
                    {firstName} {lastName}
                  </h5>
                  <Card.Text>@{username}</Card.Text>
                </div>
              </div>
              <div
                className="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-start text-center">
                  <div></div>
                </div>
              </div>
              <Card.Body className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                    <Card.Text className="font-italic mb-1">
                      {teamPosition}
                    </Card.Text>
                    <Card.Text className="font-italic mb-1">
                      Lives in {city}, {state}
                    </Card.Text>
                    <Card.Text className="font-italic mb-0">
                      Member Since: {memberSince}
                    </Card.Text>
                  </div>
                </div>

                <Row>
                  <Col className="mb-2">
                    <div>
                      {/* <Comment
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                        comment={commentsData}
                      /> */}

                      <AssetNew />
                    </div>
                  </Col>
                </Row>
                {asset.map((a, id) => {
                  return (
                    <div key={id} style={{ border: "solid" }}>
                      <div>
                        {userLog && a.user_id == userLog.user_id ? (
                          <>
                            <div>
                              <img
                                src={a.UserDatum.avatar}
                                height={47}
                                style={{ borderRadius: "50%" }}
                              />
                              {a.UserDatum.first_name} {a.UserDatum.last_name}
                              {a.message}
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
                            <div>
                              {a.UserResponses && a.UserResponses.length > 0 ? (
                                <div>
                                  {a.UserResponses.map((r, idx) => (
                                    <>
                                      <div key={idx}>
                                        <img
                                          src={r.UserDatum.avatar}
                                          height={47}
                                          width={47}
                                          style={{ borderRadius: "50%" }}
                                        />
                                        {r.UserDatum.username}
                                        {r.reply}
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
                                            setSelectedAsset(r);
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
                                            r.response_id,
                                            r.UserDatum.user_id
                                          )}
                                        >
                                          Delete
                                        </Link>
                                        <br />
                                      </div>
                                    </>
                                  ))}
                                </div>
                              ) : (
                                <>No Reply yet</>
                              )}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default UserProfData;

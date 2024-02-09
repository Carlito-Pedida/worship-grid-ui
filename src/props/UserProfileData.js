import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import useNode from "../providers/useNode";
import Comment from "./Comment";
import "../styles/UserProfTop.css";
import "../styles/Comment.css";
import AssetNew from "../components/AssetNew";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import AssetContext from "../contexts/AssetContext";

const comments = {
  id: 1,
  items: []
};

function UserProfData(props) {
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

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
      <Container className="py-5 h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col>
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
                <div className="d-flex justify-content-end text-center py-1">
                  <div>
                    <Button
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "visible" }}
                    >
                      Edit profile
                    </Button>
                  </div>
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
                      <Comment
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                        comment={commentsData}
                      />

                      <AssetNew />
                    </div>
                  </Col>
                </Row>
                <div className="user-profile">
                  <div className="container user-assets">
                    {asset.map((a, id) => {
                      return (
                        <Card key={id} className="text-center">
                          <div>
                            {userLog && a.user_id == userLog.user_id ? (
                              <>
                                <Card.Header>
                                  {a.UserDatum.first_name}
                                </Card.Header>
                                <Card.Body>
                                  <Card.Text>{a.message}</Card.Text>
                                  {a.UserResponses &&
                                  a.UserResponses.length > 0 ? (
                                    <div>
                                      {a.UserResponses.map((r, idx) => (
                                        <div key={idx}>
                                          <cite>
                                            <img
                                              src={r.UserDatum.avatar}
                                              height={45}
                                            />
                                            {r.UserDatum.username}
                                            {r.reply}
                                          </cite>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <>No Reply yet</>
                                  )}
                                </Card.Body>
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
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default UserProfData;

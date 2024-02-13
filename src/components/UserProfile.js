import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import moment from "moment";
import "../styles/UserProfile.css";
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ProgressBar,
  Row,
  Image
} from "react-bootstrap";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaSquareYoutube
} from "react-icons/fa6";

const UserProfile = () => {
  const practiceStatus = 60;
  let params = useParams();
  let navigate = useNavigate();
  const [userLog, setUserLog] = useState([]);

  let { getOneUser } = useContext(UserContext);
  let { deleteUserAsset, asset } = useContext(AssetContext);

  useEffect(() => {
    async function fetchData() {
      await getOneUser(params.user_id).then((result) => setUserLog(result));
    }
    fetchData();
  }, [getOneUser, params.user_id]);

  useEffect(() => {
    document.title = "Worship Grid > Profile";
  }, []);

  return (
    <div style={{ backgroundColor: "#eee" }}>
      <Container className="py-5">
        <Row>
          <Col lg="8">
            <Card className="mb-4 p-4">
              <Card.Body className="text-center">
                <Image
                  src={userLog.avatar}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1 p-2">@{userLog.username}</p>

                <div className="d-flex justify-content-center mb-2">
                  <Button outline className="ms-1">
                    Edit Profile
                  </Button>
                </div>
              </Card.Body>
            </Card>
            <Card className="mb-4 p-3">
              <Card.Body>
                <Row>
                  <Col sm="3">
                    <Card.Text className="d-flex">Full Name:</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      {userLog.first_name} {userLog.last_name}
                    </Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text className="d-flex">Email:</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      {userLog.email}
                    </Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text className="d-flex">Worship Team Role:</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      {userLog.position}
                    </Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text className="d-flex">Mobile:</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">(123) 456-7890</Card.Text>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm="3">
                    <Card.Text className="d-flex">Location:</Card.Text>
                  </Col>
                  <Col sm="9">
                    <Card.Text className="text-muted">
                      {userLog.city}, {userLog.state} {userLog.zipcode}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="mb-4 p-3">
              <Card.Body>
                <Card.Text className="mb-4">
                  <span className="text-primary font-italic me-1">
                    Practice
                  </span>{" "}
                  Progress
                </Card.Text>
                <Card.Text className="mb-1" style={{ fontSize: ".77rem" }}>
                  Here In Your House
                </Card.Text>
                <div className="rounded">
                  <ProgressBar
                    width={80}
                    valuemin={0}
                    now={20}
                    valuemax={100}
                  />
                </div>

                <Card.Text className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  I Thank God
                </Card.Text>
                <div className="rounded">
                  <ProgressBar
                    width={72}
                    valuemin={0}
                    now={25}
                    valuemax={100}
                  />
                </div>

                <Card.Text className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Egypt
                </Card.Text>
                <div className="rounded">
                  <ProgressBar
                    width={89}
                    valuemin={0}
                    now={30}
                    valuemax={100}
                  />
                </div>

                <Card.Text className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  I Speak Jesus
                </Card.Text>
                <div className="rounded">
                  <ProgressBar
                    width={55}
                    valuemin={0}
                    now={20}
                    valuemax={100}
                  />
                </div>

                <Card.Text className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Total Practice Progress
                </Card.Text>
                <div className="rounded">
                  <ProgressBar
                    width={55}
                    now={60}
                    label={`${practiceStatus}%`}
                  />
                </div>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body className="p-2">
                <ListGroup flush className="rounded-3">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <a href="#">
                      <FaFacebook size={35} style={{ color: "blue" }} />
                    </a>
                    <Card.Text>profile.facebook</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <a href="#">
                      <FaXTwitter size={34} />
                    </a>

                    <Card.Text>@profile.twitter</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <a href="#">
                      <FaInstagram className="insta" size={35} />
                    </a>
                    <Card.Text>@profile.instagram</Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                    <a href="#">
                      <FaSquareYoutube size={37} style={{ color: "red" }} />
                    </a>
                    <Card.Text>profile.youtube</Card.Text>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;

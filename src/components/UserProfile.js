import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
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
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import banner1 from "../BannerBgs/banner1.png";

const UserProfile = () => {
  const practiceStatus = 60;
  let params = useParams();
  const [userLog, setUserLog] = useState([]);

  let { getOneUser } = useContext(UserContext);

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
    <div className="profile">
      <Container className="py-4">
        <div className="profile-data p-5">
          <Row>
            <Col lg="8">
              <Card className="mb-4 p-2">
                <Card.Body
                  className="text-center"
                  style={{
                    backgroundImage: `url(${banner1})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgrounAttachment: "fixed"
                  }}
                >
                  <Image
                    src={userLog.avatar}
                    alt="avatar"
                    className="rounded-circle"
                    style={{
                      width: "150px",
                      height: "150px",
                      border: "solid 5px white"
                    }}
                    fluid
                  />
                  <h4 style={{ color: "white" }} className="mb-1 p-2">
                    @{userLog.username}
                  </h4>

                  <div className="d-flex justify-content-center mb-2">
                    <Link
                      variant="success"
                      outline
                      type="button"
                      className="ms-1"
                      to={`/profile/${userLog.user_id}/edit`}
                    >
                      <FontAwesomeIcon
                        className="search-tool-icon"
                        icon={faEdit}
                        size="xl"
                        color="green"
                      />
                    </Link>
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
                      <Card.Text className="d-flex">
                        Worship Team Role:
                      </Card.Text>
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
                      <Card.Text className="d-flex">Member Since:</Card.Text>
                    </Col>
                    <Col sm="9">
                      <Card.Text className="text-muted">
                        {moment
                          .parseZone(userLog.createdAt)
                          .local()
                          .format("LL")}
                      </Card.Text>
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
              <Card>
                <Card.Body>
                  <AudioPlayer
                    src="/beWithYou.m4a"
                    onPlay={(e) => console.log("onPlay")}
                    // other props here
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="mb-4 p-2" style={{ color: "#4e4e4e" }}>
                <Card.Body>
                  <Card.Text className="mb-4">
                    <h4>
                      <span className="text-primary font-italic me-1">
                        Practice
                      </span>{" "}
                      Progress
                    </h4>
                  </Card.Text>
                  <Card.Text className="songList mb-1">
                    Here In Your House
                  </Card.Text>
                  <div className="py-1 rounded">
                    <ProgressBar
                      variant="success"
                      width={80}
                      valuemin={0}
                      now={20}
                      valuemax={100}
                    />
                  </div>

                  <Card.Text className="songList mt-2 mb-1">
                    I Thank God
                  </Card.Text>
                  <div className="py-1 rounded">
                    <ProgressBar
                      variant="success"
                      width={72}
                      valuemin={0}
                      now={25}
                      valuemax={100}
                    />
                  </div>

                  <Card.Text className="songList mt-2 mb-1">Egypt</Card.Text>
                  <div className="py-1 rounded">
                    <ProgressBar
                      variant="success"
                      width={89}
                      valuemin={0}
                      now={30}
                      valuemax={100}
                    />
                  </div>

                  <Card.Text className="songList mt-2 mb-1">
                    I Speak Jesus
                  </Card.Text>
                  <div className="py-1 rounded">
                    <ProgressBar
                      variant="success"
                      width={55}
                      valuemin={0}
                      now={20}
                      valuemax={100}
                    />
                  </div>

                  <Card.Text className="mt-4 mb-1">
                    Total Practice Progress
                  </Card.Text>
                  <div className="rounded">
                    <ProgressBar
                      variant="success"
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
                      <Card.Text>
                        <a className="social" href="#">
                          profile.facebook
                        </a>
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                      <a href="#">
                        <FaXTwitter size={34} style={{ color: "black" }} />
                      </a>

                      <Card.Text>
                        {" "}
                        <a className="social" href="#">
                          @profile.x
                        </a>
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                      <a href="#">
                        <FaInstagram className="insta" size={35} />
                      </a>
                      <Card.Text>
                        {" "}
                        <a className="social" href="#">
                          @profile.insta
                        </a>
                      </Card.Text>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center p-3">
                      <a href="#">
                        <FaSquareYoutube size={37} style={{ color: "red" }} />
                      </a>
                      <Card.Text>
                        {" "}
                        <a className="social" href="#">
                          profile.youtube
                        </a>
                      </Card.Text>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;

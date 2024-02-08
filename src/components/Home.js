import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row, Stack } from "react-bootstrap";
import ReactPlayer from "react-player";
import NewsBanner from "../props/NewsBanner";
import AdsBanner from "../props/AdsBanner";
import UserContext from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  let params = useParams();
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
            // console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${userLog.username}`);
  };

  return (
    <>
      <div>
        <NewsBanner
          title="New Song Alert!"
          subTitle1="John Smith released a new single titled 'Be With You'"
          subTitle2="Sign up and get access to all the stems with the ALL ACCESS PASS!"
          buttonText="CHECK OUT NEW SONG RELEASE"
        />{" "}
      </div>

      {userLog.user_id == params.user_id ? (
        <AdsBanner
          header={
            <a className="ads-link" href="/signup">
              GET THE ALL ACCESS
            </a>
          }
          textFx="PASS"
          subHeader="Every resource you need to make to create a condusive practice
        environment."
          smallText1="Browse through all the music and practice resources to get you
        hyped up and performance ready on your weekly gig."
          smallText2="Pitch up or down your music to match the assigned keys in your
        setlist to make for accurate practice."
          smallText3="Watch all premium video tutorials from favorite musicians and
        artists!"
          bigText1="Starting at just 14.99/month"
          bigText2="Not ready to get the ALL ACCESS PASS yet?"
          bigText3="Click"
          linkedText="HERE"
          bigText4="to try it FREE for 1 month!"
          buttonText2="LEARN MORE"
        />
      ) : (
        <>
          <AdsBanner
            header="Hello,"
            textFx={userLog.first_name + "!"}
            subHeader="What would you like to do today?"
            smallText2={
              <h3>
                Check{" "}
                <a style={{ textDecoration: "none" }} href="/assets">
                  HERE
                </a>{" "}
                to see what's new on the wire!
              </h3>
            }
            bigText3="Click"
            linkedTextUser="HERE"
            bigText4="to go to your setlist"
            button1={
              <Button
                onClick={handleClick}
                style={{
                  border: "none",
                  backgroundColor: "#2c5728",
                  padding: "10px 35px 10px 35px",
                  fontWeight: "350",
                  fontSize: "15px"
                }}
              >
                Go to my Profile
              </Button>
            }
          />
        </>
      )}

      <div className="featured-vids">
        <Stack>
          <div className="vids-container">
            <Row>
              <Col style={{ justifyContent: "center", marginTop: "20px" }}>
                <h1 className="mt-5">FEATURED VIDEOS</h1>
              </Col>
            </Row>
            <Row style={{ margin: "25px" }}>
              <Col className="m-3">
                <ReactPlayer
                  className="player m-"
                  playing={false}
                  loop={true}
                  url={`https://youtu.be/Mi_QNN3aiD4?si=S_dwR0__rfbRG8Md`}
                  controls
                  height={400}
                  width={560}
                />
                <p className="mt-3">
                  {" "}
                  This is a where the description of the video goes.
                </p>
              </Col>

              <Col className="m-3">
                <ReactPlayer
                  className="player"
                  playing={false}
                  loop={true}
                  url={`https://www.youtube.com/watch?v=4ZlPtapuJNs`}
                  controls
                  height={400}
                  width={560}
                />
                <p className="mt-3">
                  {" "}
                  This is a where the description of the video goes.
                </p>
              </Col>
            </Row>

            <Row className="row" style={{ margin: "30px" }}>
              <Col className="m-3">
                <ReactPlayer
                  className="player"
                  playing={false}
                  loop={true}
                  url={`https://www.youtube.com/watch?v=xy_px_mi0jQ`}
                  controls
                  height={400}
                  width={560}
                />
                <p className="mt-3">
                  {" "}
                  This is a where the description of the video goes.
                </p>
              </Col>
              <Col className="m-3">
                <ReactPlayer
                  className="player"
                  playing={false}
                  loop={true}
                  url={`https://www.youtube.com/watch?v=8IXWSipYYXc`}
                  controls
                  height={400}
                  width={560}
                />
                <p className="mt-3">
                  {" "}
                  This is a where the description of the video goes.
                </p>
              </Col>
            </Row>
          </div>
        </Stack>
      </div>
    </>
  );
};

export default Home;

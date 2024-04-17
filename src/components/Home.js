import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import NewsBanner from "../props/NewsBanner";
import AdsBanner from "../props/AdsBanner";
import UserContext from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Home.css";
import SpinnerOverlay from "../props/SpinnerOverlay";
import ReactPlayer from "react-player";

const Home = () => {
  let params = useParams();
  const [userLog, setUserLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let { getUserAssets } = useContext(UserContext);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      setIsLoading(false);
      try {
        const result = await getUserAssets();
        if (isMounted) {
          setUserLog(result);
        }
        setIsLoading(false);
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
            console.clear();
            setIsLoading(false);
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  });

  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${userLog.user_id}/${userLog.username}`);
  };

  useEffect(() => {
    document.title = "Worship Grid > Home";
  }, []);

  const videos = [
    "http://youtu.be/Mi_QNN3aiD4?si=S_dwR0__rfbRG8Md",
    "http://www.youtube.com/watch?v=4ZlPtapuJNs",
    "http://www.youtube.com/watch?v=xy_px_mi0jQ",
    "http://www.youtube.com/watch?v=8IXWSipYYXc"
  ];

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

      {userLog.user_id === params.user_id ? (
        <AdsBanner
          header={
            <a className="ads-link" href="/signup">
              GET THE ALL ACCESS
            </a>
          }
          textFx="PASS"
          subHeader="Every resource you need to create a condusive and interactive practice
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
              <p>
                Check{" "}
                <a style={{ textDecoration: "none" }} href="/assets">
                  HERE
                </a>{" "}
                to see what's new on the wire!
              </p>
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
      <div className="vid-case">
        <div style={{ color: "white", marginBottom: "50px" }}>
          <h1>Featured Videos</h1>
        </div>

        <Row xs={1} md={2} className="g-4">
          {videos.map((vids, idx) => (
            <Col key={idx}>
              <div className="vids-container">
                <ReactPlayer
                  className="react-player"
                  playing={false}
                  loop={true}
                  url={vids}
                  controls
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <SpinnerOverlay loading={isLoading} />
    </>
  );
};

export default Home;

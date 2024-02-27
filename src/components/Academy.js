// import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/Academy.css";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const Academy = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

  const handleVideoChange = (index) => {
    setSelectedVideoIndex(index);
  };

  const videoList = [
    {
      url: "http://www.youtube.com/watch?v=yNQp9toTAGo&pp=ygUfd2UgcmFpc2UgcGxhbmV0c2hha2VycyB0dXRvcmlhbA%3D%3D",
      title: "We Raise | Official Music Video",
      thumbnail:
        "http://i.ytimg.com/vi/yNQp9toTAGo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBDEZbbTGAJ8XYNbQwF6g30YGO5A",
      artist: "Planetshakers"
    },
    {
      url: "http://www.youtube.com/watch?v=L0pJr1RHoAM",
      title: "We Raise | Drums Tutorial",
      thumbnail:
        "http://i.ytimg.com/vi/L0pJr1RHoAM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDqEhVA1is1E4yeVcfgtCxDN2Wc_w",
      artist: "Planetshakers"
    },
    {
      url: "http://www.youtube.com/watch?v=UUQL_W9XDUc",
      title: "We Raise | Bass Tutorial",
      thumbnail:
        "http://i.ytimg.com/vi/UUQL_W9XDUc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYz3hasRtOdd8BYHlTBRkDXKOoyQ",
      artist: "Planetshakers"
    },
    {
      url: "http://www.youtube.com/watch?v=aiBcROu0bRw",
      title: "We Raise | Guitar 1 Tutorial",
      thumbnail:
        "http://i.ytimg.com/vi/aiBcROu0bRw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDcB58v7r3OkTCN2bC7my3g-YCkA",
      artist: "Planetshakers"
    },
    {
      url: "http://www.youtube.com/watch?v=aiBcROu0bRw",
      title: "We Raise | Guitar 2 Tutorial",
      thumbnail:
        "http://i.ytimg.com/vi/XXClK5VZQls/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCor2VVe1I43zxezPt6m3rc-aYtTQ",
      artist: "Planetshakers"
    },
    {
      url: "http://www.youtube.com/watch?v=8IXWSipYYXc&t=147s",
      title: "We Raise | Keys Tutorial",
      thumbnail:
        "http://i.ytimg.com/vi/aiBcROu0bRw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDcB58v7r3OkTCN2bC7my3g-YCkA",
      artist: "Planetshakers"
    }
  ];

  return (
    <div className="academy-body">
      <h2 className="academy-title">Featured Tutorial</h2>
      <div>
        <div className="player-wrapper">
          <ReactPlayer
            url={videoList[selectedVideoIndex].url}
            className="react-player"
            controls={true}
          />
          <div>
            {videoList.map((video, index) => (
              <div
                style={{ backgroundColor: "black", borderStyle: "none" }}
                id="video-tabs"
                key={index}
                className={index === selectedVideoIndex ? "tab active" : "tab"}
                onClick={() => handleVideoChange(index)}
              >
                <img
                  className="px-1"
                  height={45}
                  src={video.thumbnail}
                  alt="Thumbail here"
                />{" "}
                <div className="ps-2 tab-titles">
                  {video.title}
                  {video.artist}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5">
        <h2 className="academy-title">Other Tutorials</h2>
        <Row xs={1} md={4} className="g-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Col key={idx}>
              <Card style={{ borderRadius: "0px" }}>
                <Card.Img
                  style={{ borderRadius: "0px" }}
                  variant="top"
                  src="http://i.ytimg.com/vi/aiBcROu0bRw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDcB58v7r3OkTCN2bC7my3g-YCkA"
                  height={200}
                />
                <Card.Body>
                  <Card.Title>Video Tutorial Title</Card.Title>
                  <Card.Text>
                    This is the description of the video tutorial
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Academy;

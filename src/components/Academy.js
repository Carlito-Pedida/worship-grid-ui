// import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/Academy.css";
import { useState } from "react";

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
    </div>
  );
};

export default Academy;

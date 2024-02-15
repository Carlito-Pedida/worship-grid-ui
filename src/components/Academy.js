import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import "../styles/Academy.css";

const Academy = () => {
  useEffect(() => {
    document.title = "Worship Grid - Academy";
  }, []);
  return (
    <div className="academy-body">
      <div className="player-wrapper">
        <ReactPlayer
          url={[
            "https://www.youtube.com/watch?v=LXb3EKWsInQ",
            "https://www.youtube.com/watch?v=oUFJJNQGwhk",
            "https://www.youtube.com/watch?v=jNgP6d9HraI"
          ]}
          className="react-player"
        />
      </div>
    </div>
  );
};

export default Academy;

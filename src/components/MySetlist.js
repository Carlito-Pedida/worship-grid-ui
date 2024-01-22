import React, { useEffect } from "react";

const MySetlist = () => {
  useEffect(() => {
    const token = "[My access token]";
    const player = new window.Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5
    });

    // Ready
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });

    document.getElementById("togglePlay").onclick = function () {
      player.togglePlay();
    };

    player.connect();

    // Clean up on component unmount
    return () => {
      player.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Spotify Web Playback SDK Quick Start</h1>
      <button id="togglePlay">Toggle Play</button>
    </div>
  );
};

export default MySetlist;

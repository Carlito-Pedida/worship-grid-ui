import React, { useEffect } from "react";

const NewSongRelease = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Article";
  }, []);
  return <div>New Song RELEASE!</div>;
};

export default NewSongRelease;

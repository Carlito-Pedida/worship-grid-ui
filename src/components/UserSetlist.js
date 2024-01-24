import React, { useEffect } from "react";

const UserSetlist = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Setlist";
  }, []);
  return <div>UserSetlist</div>;
};

export default UserSetlist;

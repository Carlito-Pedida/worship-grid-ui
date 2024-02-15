import React, { useEffect } from "react";
import AdsBanner from "../props/AdsBanner";

const Academy = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid - Academy";

    // Optionally, you can reset the title when the component unmounts
    //   return () => {
    //     document.title = "Worship Grid";
    //   };
  }, []);
  return (
    <>
      <div> {/* <UserImage /> */}</div>
      <AdsBanner
        header="SOMETHING AWESOME COMING"
        textFx="SOON!"
        subHeader="Check back next time for updates"
        buttonText2="LEARN MORE"
      />
    </>
  );
};

export default Academy;

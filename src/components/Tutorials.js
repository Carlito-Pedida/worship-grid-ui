import React, { useEffect } from "react";
import AdsBanner from "../props/AdsBanner";

const Tutorials = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid - Tutorials";

    // Optionally, you can reset the title when the component unmounts
    //   return () => {
    //     document.title = "Worship Grid";
    //   };
  }, []);
  return (
    <AdsBanner
      header="THIS IS THE PAGE FOR"
      textFx="TUTORIALS!"
      subHeader="Check back next time for updates"
      buttonText2="LEARN MORE"
    />
  );
};

export default Tutorials;

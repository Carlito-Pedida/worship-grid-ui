import React, { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid - Events";

    // Optionally, you can reset the title when the component unmounts
    //   return () => {
    //     document.title = "Worship Grid";
    //   };
  }, []);
  return (
    <AdsBanner
      header="THIS IS THE PAGE FOR UPCOMING"
      textFx="EVENTS!"
      subHeader="Check back next time for updates"
      buttonText2="LEARN MORE"
    />
  );
};

export default Events;

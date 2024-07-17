import React, { useEffect } from "react";
import AdsBanner from "../props/AdsBanner";

const Events = () => {
  useEffect(() => {
    document.title = "Worship Grid - Events";
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

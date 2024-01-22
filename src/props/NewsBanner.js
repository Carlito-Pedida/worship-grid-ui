import React from "react";
import { Button } from "react-bootstrap";

const NewsBanner = (props) => {
  const { title, subTitle1, subTitle2, buttonText } = props;

  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{subTitle1}</p>
      <p>{subTitle2}</p>
      <Button>{buttonText}</Button>
    </div>
  );
};
export default NewsBanner;

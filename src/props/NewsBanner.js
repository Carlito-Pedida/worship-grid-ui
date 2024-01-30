import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NewsBanner = (props) => {
  let navigate = useNavigate();
  const { title, subTitle1, subTitle2, buttonText } = props;

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{subTitle1}</p>
      <p>{subTitle2}</p>
      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  );
};
export default NewsBanner;

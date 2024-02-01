import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/MerchBanner.css";

const MerchBanner = (props) => {
  let navigate = useNavigate();
  const { title1, title2, subTitle1, subTitle2, buttonText } = props;

  const handleClick = () => {
    navigate("/merchandise");
  };
  return (
    <div className="merch-banner">
      <h2>{title1}</h2>
      <h2>{title2}</h2>
      <p>{subTitle1}</p>
      <p>{subTitle2}</p>
      <Button onClick={handleClick}>{buttonText}</Button>
    </div>
  );
};
export default MerchBanner;

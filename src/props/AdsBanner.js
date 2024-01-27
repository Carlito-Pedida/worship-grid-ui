import React from "react";
import "../styles/AdsBanner.css";
import { Button } from "react-bootstrap";

const AdsBanner = (props) => {
  const {
    header,
    subHeader,
    smallText1,
    smallText2,
    smallText3,
    bigText1,
    bigText2,
    bigText3,
    bigText4,
    linkedText,
    textFx,
    buttonText2
  } = props;

  return (
    <div className="landing-top">
      <div className="sub-invite">
        <h1 className="all-access">
          {header} <span className="textFx">{textFx}</span>
        </h1>

        <h3>{subHeader}</h3>
        <br />
        <h6>
          {smallText1}
          <br />
          {smallText2}
          <br />
          {smallText3}
        </h6>
        <br />
        <h3>{bigText1}</h3>
        <h4>
          {bigText2}{" "}
          <span>
            {bigText3}{" "}
            <a style={{ textDecoration: "none" }} href="/signup">
              <strong>{linkedText}</strong>
            </a>{" "}
            {bigText4}
          </span>
        </h4>
        <br />
        <Button>{buttonText2}</Button>
        <br />
      </div>
    </div>
  );
};

export default AdsBanner;

import React from "react";
import "../styles/AdsBanner.css";

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
    linkedTextUser,
    textFx,
    button1,
    buttonText2,
    buttonText3
  } = props;

  return (
    <div className="landing-top">
      <div className="sub-invite">
        <h1 className="all-access">
          {header} <span className="textFx">{textFx}</span>
        </h1>
        <h3>{subHeader}</h3>
        <div>
          {smallText1}
          <br />
          {smallText2}
          <br />
          {smallText3}
        </div>
        <h3>{bigText1}</h3>
        <h4>
          {bigText2}{" "}
          <span>
            {bigText3}{" "}
            <a style={{ textDecoration: "none" }} href="/signup">
              <strong>{linkedText}</strong>
            </a>{" "}
            <a style={{ textDecoration: "none" }} href="/setlist">
              <strong>{linkedTextUser}</strong>
            </a>{" "}
            {bigText4}
          </span>
        </h4>
        <br />
        <div>{button1}</div>
      </div>
    </div>
  );
};

export default AdsBanner;

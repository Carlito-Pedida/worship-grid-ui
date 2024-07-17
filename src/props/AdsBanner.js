import React, { useState } from "react";
import "../styles/AdsBanner.css";
import { Link } from "react-router-dom";
import SignIn from "../components/SignIn";

const AdsBanner = (props) => {
  const {
    header,
    subHeader1,
    subHeader2,
    subHeaderLink,
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
    button1
  } = props;

  const [showSignInModal, setShowSignInModal] = useState(false);

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="landing-top">
      <div className="sub-invite">
        <h1 className="all-access">
          {header} <span className="textFx">{textFx}</span>
        </h1>
        <h3>
          {subHeader1}{" "}
          <Link
            style={{ textDecoration: "none" }}
            to={openSignInModal}
            onClick={openSignInModal}
          >
            <strong>{subHeaderLink}</strong>
          </Link>{" "}
          {subHeader2}
        </h3>
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
      <SignIn
        show={showSignInModal}
        handleClose={closeSignInModal}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default AdsBanner;

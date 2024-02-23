import React, { useState } from "react";
import "../styles/SpinnerOverlay.css";
import { Spinner } from "react-bootstrap";

const SpinnerOverlay = ({ loading }) => {
  return (
    loading && (
      <div className="spinner-overlay">
        <div className="spinner-container">
          <div className="spinner-outer">
            <div className="spinner" role="status"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default SpinnerOverlay;

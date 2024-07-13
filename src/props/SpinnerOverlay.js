import React from "react";
import "../styles/SpinnerOverlay.css";

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

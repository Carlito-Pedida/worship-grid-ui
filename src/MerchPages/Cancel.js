import React from "react";
import { Container } from "react-bootstrap";
import MerchBanner from "../props/MerchBanner";

const Cancel = () => {
  return (
    <Container>
      <div style={{ margin: "10px", borderRadius: "10px" }}>
        <MerchBanner
          title2="Transaction Canceled!"
          subTitle1="We look forward to your next transaction with us!"
          buttonText="Go back to WG Store"
        />
      </div>
    </Container>
  );
};

export default Cancel;

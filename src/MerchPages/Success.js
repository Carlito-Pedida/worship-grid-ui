import React from "react";
import MerchBanner from "../props/MerchBanner";
import { Container } from "react-bootstrap";

const Success = () => {
  return (
    <Container>
      <div style={{ margin: "50px", borderRadius: "10px" }}>
        <MerchBanner
          title1="Thank you for your purchase!"
          subTitle1="We look forward to your next transaction with us!"
          buttonText="Go back to WG Store"
        />
      </div>
    </Container>
  );
};

export default Success;

import { Container } from "react-bootstrap";
import React from "react";
import AdsBanner from "./AdsBanner";

const SignUpSuccess = () => {
  return (
    <Container>
      <div style={{ margin: "50px", borderRadius: "10px" }}>
        <AdsBanner
          subHeader1="Account created successfully!"
          bigText1="Go to MY ACCOUNT to sign in"
        />
      </div>
    </Container>
  );
};

export default SignUpSuccess;

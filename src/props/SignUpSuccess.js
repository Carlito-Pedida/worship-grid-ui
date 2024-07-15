import { Container } from "@chakra-ui/react";
import React from "react";
import AdsBanner from "./AdsBanner";
import SignIn from "../components/SignIn";

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

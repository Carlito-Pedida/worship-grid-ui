import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignIn from "./SignIn";
import AdsBanner from "../props/AdsBanner";
import { Button } from "react-bootstrap";

const PrivateRoutes = () => {
  let navigate = useNavigate();
  const token = localStorage.getItem("loggedUserToken");

  const isAuthenticated = token !== null && token !== undefined;

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

  function handleClick() {
    navigate("/signup");
  }

  if (redirect) {
    return (
      <div>
        <AdsBanner
          header="THIS PAGE IS"
          textFx="RESTRICTED!"
          subHeader="You need to SIGN IN access this area!"
          button1={
            <Button onClick={handleClick}>SIGN UP FOR FULL ACCESS</Button>
          }
        />
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;

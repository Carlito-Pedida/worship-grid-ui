import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import SignIn from "./SignIn";
import AdsBanner from "../props/AdsBanner";
import { Button, Container } from "react-bootstrap";
import Restricted from "../props/Restricted";

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
      <div className="container py-4">
        <Restricted
          title1="This area is"
          title2="RESTRICTED!"
          buttonText="Sign Up for full access"
        />
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRoutes;

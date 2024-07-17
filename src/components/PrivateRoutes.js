import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Restricted from "../props/Restricted";

const PrivateRoutes = () => {
  const token = localStorage.getItem("loggedUserToken");

  const isAuthenticated = token !== null && token !== undefined;

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      setRedirect(true);
    }
  }, [isAuthenticated]);

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

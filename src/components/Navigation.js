import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        <Link to="/signup">Sign Up</Link>
        <span> | </span>
        <Link to="/signin">Sign In</Link>
        <span> | </span>
        <Link to="/assets">Assets</Link>
        <span> | </span>
        <Link to="/create">Asset New</Link>

        <hr></hr>
      </nav>
    </div>
  );
};

export default Navigation;

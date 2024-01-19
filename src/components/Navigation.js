import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { Stack } from "react-bootstrap";

const Navigation = ({ user }) => {
  let { user_id } = useParams();
  const [userLog, setUserLog] = useState();

  let { loggedUser } = useContext(UserContext);
  console.log(loggedUser);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await loggedUser();
        if (isMounted) {
          setUserLog(result);
        }
      } catch (error) {
        if (isMounted) {
          if (error.response && error.response.status === 404) {
            console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div
      className="justify-content-center align-items-center pt-3"
      style={{ backgroundColor: "olivegreen", alignItems: "center" }}
    >
      <nav>
        {user && (
          <React.Fragment>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/"
            >
              Home
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/assets"
            >
              Assets
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/create"
            >
              Asset New
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/signup"
            >
              Hello, {user.first_name}!
            </Link>

            <span>
              <img
                style={{
                  borderRadius: "50%",
                  border: "solid 5px",

                  borderColor: "green",
                  marginLeft: "5px",
                  marginRight: "5px"
                }}
                src={user.avatar}
                size="40"
                round="true"
                height={65}
                width={65}
              />
            </span>

            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/signout"
            >
              SignOut{" "}
            </Link>
          </React.Fragment>
        )}
        {!user && (
          <React.Fragment>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/"
            >
              Home
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/signup"
            >
              Sign Up
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/signin"
            >
              Sign In
            </Link>
            <span
              style={{
                color: "white",
                fontSize: "25px"
              }}
            >
              {" "}
              |{" "}
            </span>
            <Link
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "25px"
              }}
              to="/assets"
            >
              Assets
            </Link>
          </React.Fragment>
        )}

        <hr></hr>
      </nav>
    </div>
  );
};

export default Navigation;

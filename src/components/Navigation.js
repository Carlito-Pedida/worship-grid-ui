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
    <div className="justify-content-center align-items-center pt-3">
      <nav>
        {user && (
          <React.Fragment>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/assets">Assets</Link>
            <span> | </span>
            <Link to="/create">Asset New</Link>
            <span> | </span>
            <Link to="/signup">Welcome Back {user.first_name}</Link>
            <span> | </span>
            <Link to="/signout">SignOut </Link>

            <span>
              <img
                style={{
                  borderRadius: "50%",
                  border: "solid 5px",

                  borderColor: "green",
                  marginLeft: "5px"
                }}
                src={user.avatar}
                size="40"
                round="true"
                height={65}
                width={65}
              />
            </span>
          </React.Fragment>
        )}
        {!user && (
          <React.Fragment>
            <Link to="/">Home</Link>
            <span> | </span>
            <Link to="/signup">Sign Up</Link>
            <span> | </span>
            <Link to="/signin">Sign In</Link>
            <span> | </span>
            <Link to="/assets">Assets</Link>
          </React.Fragment>
        )}

        <hr></hr>
      </nav>
    </div>
  );
};

export default Navigation;

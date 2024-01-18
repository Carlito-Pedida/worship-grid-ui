import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

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
    <div>
      <nav>
        <Link to="/">Home</Link>
        <span> | </span>
        {!user && (
          <React.Fragment>
            <Link to="/signup">Sign Up</Link>
            <span> | </span>
            <Link to="/signin">Sign In</Link>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <span>
              <img
                src={user.avatar}
                size="40"
                round="true"
                height={35}
                width={35}
              />
            </span>

            <Link to="/signup">Welcome Back {user.first_name}</Link>
            <span> | </span>
            <Link to="/signin">Something Else2</Link>
            <span> | </span>
            <Link to="/signout">SignOut</Link>
          </React.Fragment>
        )}

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

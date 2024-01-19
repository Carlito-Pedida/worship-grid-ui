import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../styles/Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";

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
    <div className="nav-container">
      <Container>
        <Navbar style={{ backgroundColor: "#2c5728" }}>
          <Nav className="navi">
            {user && (
              <React.Fragment>
                <Link className="nav-links" to="/">
                  WORSHIP GRID ACADEMY
                </Link>

                <Link className="nav-links" to="/signup">
                  MERCHANDISE
                </Link>

                <Navbar.Brand href="#home">
                  <img src="/logo.png" height={80} />
                </Navbar.Brand>

                <Link className="nav-links" to="/assets">
                  CONVERSATIONS
                </Link>

                <Link className="nav-links" to="/create">
                  BLOG
                </Link>

                <Link className="nav-links" to="/">
                  Hello, {user.first_name}!
                </Link>

                <span>
                  <img
                    style={{
                      borderRadius: "50%",
                      border: "solid 5px",

                      borderColor: "white",
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

                <Link className="nav-links" to="/signout">
                  SignOut
                </Link>
              </React.Fragment>
            )}
            {!user && (
              <React.Fragment>
                <div>
                  <div>
                    <Link className="nav-links" to="#">
                      WORSHIP GRID ACADEMY
                    </Link>

                    <Link className="nav-links" to="/signup">
                      MERCHANDISE
                    </Link>

                    <Navbar.Brand href="#" className="brand m-0 p-0">
                      <img src="/logo.png" height={80} width={80} />
                    </Navbar.Brand>

                    <Link className="nav-links" to="/signup">
                      GET ACCESS
                    </Link>

                    <Link className="nav-links" to="/signin">
                      MY ACCOUNT
                    </Link>

                    <Link className="nav-links" to="/assets">
                      CONVERSATIONS
                    </Link>
                  </div>
                  <div className="nav-links2">
                    <Link className="nav-links" to="#">
                      NEW LINK
                    </Link>
                    <Link className="nav-links" to="#">
                      NEW LINK
                    </Link>
                    <Link className="nav-links" to="#">
                      NEW LINK
                    </Link>
                    <Link className="nav-links" to="#">
                      NEW LINK
                    </Link>
                    <Link className="nav-links" to="#">
                      NEW LINK
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default Navigation;

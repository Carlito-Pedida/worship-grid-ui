import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
                <div>
                  <div>
                    <Link className="nav-links" to="/">
                      WORSHIP GRID ACADEMY
                    </Link>

                    <Link className="nav-links" to="/signup">
                      MY SETLIST
                    </Link>

                    <Link className="nav-links" to="/create">
                      BLOG
                    </Link>

                    <Link type="link" to="/" className="brand m-2 p-2">
                      <img
                        className="brand-image"
                        src="/logo-2.png"
                        height={55}
                      />
                    </Link>

                    <Link className="nav-links" to="/assets">
                      CONVERSATIONS
                    </Link>

                    <Link className="nav-links" to="/">
                      HELLO,{" "}
                      <strong style={{ textTransform: "uppercase" }}>
                        {user.first_name}!
                      </strong>
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
                      SIGN OUT
                    </Link>
                    <div className="navLinks2-container">
                      <Link className="hover-underline-animation" to="#">
                        CHURCHES IN THE AREA
                      </Link>
                      <Link className="hover-underline-animation" to="#">
                        MERCHANDISE
                      </Link>
                      <Link className="hover-underline-animation" to="#">
                        EVENTS
                      </Link>
                      <Link className="hover-underline-animation" to="#">
                        RSS
                      </Link>
                      <Link className="hover-underline-animation" to="#">
                        TUTORIALS
                      </Link>
                      <Link className="search-tool-animation">
                        <FontAwesomeIcon
                          className="search-tool-icon"
                          icon={faSearch}
                          size="xl"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
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

                    <Link to="/" className="brand m-2 p-2">
                      <img
                        className="brand-image"
                        src="/logo-2.png"
                        height={55}
                      />
                    </Link>
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
                  <div className="navLinks2-container">
                    <Link className="hover-underline-animation" to="#">
                      CHURCHES IN THE AREA
                    </Link>
                    <Link className="hover-underline-animation" to="#">
                      MERCHANDISE
                    </Link>
                    <Link className="hover-underline-animation" to="#">
                      EVENTS
                    </Link>
                    <Link className="hover-underline-animation" to="#">
                      RSS
                    </Link>
                    <Link className="hover-underline-animation" to="#">
                      TUTORIALS
                    </Link>
                    <Link className="search-tool-animation">
                      <FontAwesomeIcon
                        className="search-tool-icon"
                        icon={faSearch}
                        size="xl"
                      />
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

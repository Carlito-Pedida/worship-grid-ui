import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import SignIn from "../components/SignIn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import MerchCart from "../MerchPages/MerchCart";
import CartContext from "../contexts/CartContext";

const Navigation = () => {
  const [userLog, setUserLog] = useState([]);

  let { getUserAssets } = useContext(UserContext);

  let { cartItems } = useContext(CartContext);

  const cartItemCounter = cartItems.reduce((sum, item) => sum + item.qty, 0);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const result = await getUserAssets();
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

  const [showSignInModal, setShowSignInModal] = useState(false);

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [showCartModal, setShowCartModal] = useState(false);

  const openCartModal = () => {
    setShowCartModal(true);
  };

  const closeCartModal = () => {
    setShowCartModal(false);
  };

  const handleSubmitCart = (e) => {
    e.preventDefault();
  };

  function whoIsLoggedIn() {
    let { first_name, avatar } = userLog;
    return (
      <div className="nav-container">
        <Navbar style={{ backgroundColor: "#2c5728" }}>
          <Nav className="navi">
            {userLog.user_id && (
              <React.Fragment>
                <div>
                  <div>
                    <Link className="nav-links" to="/academy">
                      WORSHIP GRID ACADEMY
                    </Link>

                    <Link className="nav-links" to="/setlist">
                      MY SETLIST
                    </Link>

                    <Link className="nav-links" to="/article">
                      BLOG
                    </Link>

                    <Link type="link" to="/" className="brand m-2 p-2">
                      <img
                        className="brand-image"
                        src="/logo-2.png"
                        alt=""
                        height={55}
                      />
                    </Link>

                    <Link className="nav-links" to="/assets">
                      CONVERSATIONS
                    </Link>

                    <Link
                      className="nav-links"
                      to={`/profile/${userLog.username}`}
                    >
                      HELLO,{" "}
                      <strong style={{ textTransform: "uppercase" }}>
                        {first_name}!
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
                        src={avatar}
                        size="40"
                        round="true"
                        height={65}
                        width={65}
                        alt=""
                      />
                    </span>

                    <Link className="nav-links" to="/signout">
                      SIGN OUT
                    </Link>
                    <div className="navLinks2-container">
                      <Link
                        className="hover-underline-animation"
                        to="churchlocations"
                      >
                        CHURCHES IN THE AREA
                      </Link>
                      <Link
                        className="hover-underline-animation"
                        to="/merchandise"
                      >
                        MERCHANDISE
                      </Link>
                      <Link className="hover-underline-animation" to="/events">
                        EVENTS
                      </Link>
                      <Link className="hover-underline-animation" to="/rss">
                        RSS
                      </Link>
                      <Link
                        className="hover-underline-animation"
                        to="tutorials"
                      >
                        TUTORIALS
                      </Link>
                      <Link className="search-tool-animation">
                        <FontAwesomeIcon
                          className="search-tool-icon"
                          icon={faSearch}
                          size="xl"
                        />
                      </Link>

                      {cartItemCounter > 0 ? (
                        <Link
                          className="search-tool-animation"
                          to={openCartModal}
                          onClick={openCartModal}
                        >
                          <FontAwesomeIcon
                            className="search-tool-icon"
                            icon={faCartShopping}
                            size="xl"
                          />
                          <span style={{ color: "orange", fontSize: "15px" }}>
                            {cartItemCounter}
                          </span>
                        </Link>
                      ) : (
                        <Link
                          className="search-tool-animation"
                          to={openCartModal}
                          onClick={openCartModal}
                        >
                          <FontAwesomeIcon
                            className="search-tool-icon"
                            icon={faCartShopping}
                            size="xl"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
            {!userLog.user_id && (
              <React.Fragment>
                <div>
                  <div>
                    <Link className="nav-links" to="academy">
                      WORSHIP GRID ACADEMY
                    </Link>
                    <Link className="nav-links" to="/signup">
                      GET ACCESS
                    </Link>

                    <Link to="/" className="brand m-2 p-2">
                      <img
                        className="brand-image"
                        src="/logo-2.png"
                        height={55}
                        alt=""
                      />
                    </Link>

                    <Link
                      className="nav-links"
                      to={openSignInModal}
                      onClick={openSignInModal}
                    >
                      MY ACCOUNT
                    </Link>

                    <Link className="nav-links" to={"/assets"}>
                      CONVERSATIONS
                    </Link>
                  </div>
                  <div className="navLinks2-container">
                    <Link
                      className="hover-underline-animation"
                      to="churchlocations"
                    >
                      CHURCHES IN THE AREA
                    </Link>
                    <Link
                      className="hover-underline-animation"
                      to="/merchandise"
                    >
                      MERCHANDISE
                    </Link>
                    <Link className="hover-underline-animation" to="/events">
                      EVENTS
                    </Link>
                    <Link className="hover-underline-animation" to="rss">
                      RSS
                    </Link>
                    <Link className="hover-underline-animation" to="tutorials">
                      TUTORIALS
                    </Link>
                    <Link className="search-tool-animation">
                      <FontAwesomeIcon
                        className="search-tool-icon"
                        icon={faSearch}
                        size="xl"
                      />
                    </Link>
                    {cartItemCounter > 0 ? (
                      <Link
                        className="search-tool-animation"
                        to={openCartModal}
                        onClick={openCartModal}
                      >
                        <FontAwesomeIcon
                          className="search-tool-icon"
                          icon={faCartShopping}
                          size="xl"
                        />
                        <span style={{ color: "orange", fontSize: "15px" }}>
                          {cartItemCounter}
                        </span>
                      </Link>
                    ) : (
                      <Link
                        className="search-tool-animation"
                        to={openCartModal}
                        onClick={openCartModal}
                      >
                        <FontAwesomeIcon
                          className="search-tool-icon"
                          icon={faCartShopping}
                          size="xl"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </React.Fragment>
            )}
          </Nav>
        </Navbar>

        {/* <Stack gap={3} className="col-md-10 mx-auto mt-3">
          <Outlet />
        </Stack> */}
        <SignIn
          show={showSignInModal}
          handleClose={closeSignInModal}
          handleSubmit={handleSubmit}
        />
        <MerchCart
          show={showCartModal}
          handleClose={closeCartModal}
          key={cartItems.merch_id}
        />
      </div>
    );
  }
  return whoIsLoggedIn();
};

export default Navigation;

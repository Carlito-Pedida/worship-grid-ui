import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import SignIn from "./SignIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Nav, Navbar, Col } from "react-bootstrap";
import MerchCart from "../MerchPages/MerchCart";
import CartContext from "../contexts/CartContext";
import SearchModal from "./SearchModal";
import "../styles/Navigation.css";

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

  // State to manage the visibility of the search modal
  const [showSearchModal, setShowSearchModal] = useState(false);

  // Function to open the search modal
  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  // Function to close the search modal
  const closeSearchModal = () => {
    setShowSearchModal(false);
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
                    <div className="row nav-top">
                      <Col className="nav-top-left">
                        <Link className="nav-links" to="/setlist">
                          MY SETLIST
                        </Link>

                        <Link className="nav-links" to="/featured_music">
                          MY MUSIC
                        </Link>
                      </Col>
                      <Col className="nav-top-center">
                        <Link type="link" to="/" className="brand m-2 p-2">
                          <img
                            className="brand-image"
                            src="/logo-2.png"
                            alt=""
                            height={55}
                          />
                        </Link>
                      </Col>
                      <Col className="nav-top-right">
                        <Link
                          className="nav-links"
                          to={`/profile/${userLog.user_id}/${userLog.username}`}
                        >
                          HELLO,{" "}
                          <strong style={{ textTransform: "uppercase" }}>
                            {first_name}!
                          </strong>
                        </Link>

                        <img
                          style={{
                            borderRadius: "50%",
                            border: "solid 3px white",
                            marginLeft: "5px",
                            marginRight: "5px"
                          }}
                          src={avatar}
                          size="40"
                          round="true"
                          height={45}
                          width={45}
                          alt=""
                        />
                      </Col>
                    </div>

                    <div className="navLinks2">
                      <Link className="hover-underline-animation" to="/assets">
                        MESSAGE BOARD
                      </Link>

                      <Link
                        className="hover-underline-animation"
                        to="/merchandise"
                      >
                        MERCHANDISE
                      </Link>
                      <Link
                        className="hover-underline-animation"
                        to="/daily_devotionals"
                      >
                        DEVO
                      </Link>
                      <Link className="hover-underline-animation" to="/academy">
                        WORSHIP GRID ACADEMY
                      </Link>
                      <Link
                        className="search-tool-animation"
                        onClick={openSearchModal}
                      >
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
                        <></>
                      )}
                      <Link className="hover-underline-animation" to="/signout">
                        SIGN OUT
                      </Link>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )}
            {!userLog.user_id && (
              <React.Fragment>
                <div>
                  <div>
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
                  </div>
                  <div className="navLinks2">
                    <Link className="hover-underline-animation" to={"/assets"}>
                      MESSAGE BOARD
                    </Link>

                    <Link
                      className="hover-underline-animation"
                      to="/merchandise"
                    >
                      MERCHANDISE
                    </Link>
                    <Link
                      className="hover-underline-animation"
                      to="/daily_devotionals"
                    >
                      DEVO
                    </Link>
                    <Link className="hover-underline-animation" to="/academy">
                      WORSHIP GRID ACADEMY
                    </Link>

                    <Link
                      className="search-tool-animation"
                      onClick={openSearchModal}
                    >
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
                      <></>
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
        <SearchModal show={showSearchModal} handleClose={closeSearchModal} />
      </div>
    );
  }
  return whoIsLoggedIn();
};

export default Navigation;

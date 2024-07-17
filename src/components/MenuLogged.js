import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../styles/Navigation.css";
import CartItemCounter from "./CartItemCounter";
import SearchModal from "./SearchModal";

const MenuLogged = () => {
  const [userLog, setUserLog] = useState([]);

  let { getUserAssets } = useContext(UserContext);

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

  const [showSearchModal, setShowSearchModal] = useState(false);

  const openSearchModal = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };
  function whoIsLoggedIn() {
    let { first_name, avatar } = userLog;

    return (
      <>
        {userLog.user_id && (
          <React.Fragment>
            <Stack direction="horizontal" gap={3}>
              <Link className="nav-links" to="/setlist">
                MY SETLIST
              </Link>
              <Link className="nav-links" to="/featured_music">
                MY MUSIC
              </Link>
              <Link type="link" to="/">
                <img
                  className="brand-image"
                  src="/logo-2.png"
                  alt=""
                  height={55}
                />
              </Link>

              <Link
                className="nav-links"
                to={`/profile/${userLog.user_id}/${userLog.username}`}
              >
                HELLO,{" "}
                <strong style={{ textTransform: "uppercase" }}>
                  {first_name}!
                </strong>
              </Link>

              <Link to={`/profile/${userLog.user_id}/${userLog.username}`}>
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
                  alt="user-avatar"
                />
              </Link>
              <Link className="nav-links" to="/signout">
                SIGN OUT
              </Link>
            </Stack>

            <Stack direction="horizontal" gap={3}>
              <Link className="hover-underline-animation" to="/assets">
                MESSAGE BOARD
              </Link>

              <Link className="hover-underline-animation" to="/merchandise">
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
              <Link className="search-tool-animation" onClick={openSearchModal}>
                <FontAwesomeIcon
                  className="search-tool-icon"
                  icon={faSearch}
                  size="xl"
                />
              </Link>
              <CartItemCounter />
            </Stack>
          </React.Fragment>
        )}
        <SearchModal show={showSearchModal} handleClose={closeSearchModal} />
      </>
    );
  }
  return whoIsLoggedIn();
};

export default MenuLogged;

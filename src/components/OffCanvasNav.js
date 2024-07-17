import { useContext, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import UserContext from "../contexts/UserContext";

export const OffCanvasNav = ({ onLinkClick }) => {
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

  return (
    <div className="d-lg-none">
      {userLog.user_id && (
        <>
          <Stack gap={2}>
            <Link
              className="hover-underline-animation"
              to="/setlist"
              onClick={onLinkClick}
            >
              MY SETLIST
            </Link>
            <Link
              className="hover-underline-animation"
              to="/featured_music"
              onClick={onLinkClick}
            >
              MY MUSIC
            </Link>

            <Link
              className="hover-underline-animation"
              to="/assets"
              onClick={onLinkClick}
            >
              MESSAGE BOARD
            </Link>

            <Link
              className="hover-underline-animation"
              to="/merchandise"
              onClick={onLinkClick}
            >
              MERCHANDISE
            </Link>
            <Link
              className="hover-underline-animation"
              to="/daily_devotionals"
              onClick={onLinkClick}
            >
              DEVO
            </Link>
            <Link
              className="hover-underline-animation"
              to="/academy"
              onClick={onLinkClick}
            >
              WORSHIP GRID ACADEMY
            </Link>
            <hr />
            <Link
              className="hover-underline-animation"
              to="/signout"
              onClick={onLinkClick}
            >
              SIGN OUT
            </Link>
          </Stack>
        </>
      )}
      {!userLog.user_id && (
        <Stack gap={2}>
          <Link
            className="hover-underline-animation"
            to={openSignInModal}
            onClick={openSignInModal}
          >
            MY ACCOUNT
          </Link>
          <Link
            className="hover-underline-animation"
            to={"/assets"}
            onClick={onLinkClick}
          >
            MESSAGE BOARD
          </Link>
          <Link
            className="hover-underline-animation"
            to="/merchandise"
            onClick={onLinkClick}
          >
            MERCHANDISE
          </Link>
          <Link
            className="hover-underline-animation"
            to="/daily_devotionals"
            onClick={onLinkClick}
          >
            DEVO
          </Link>
          <Link
            className="hover-underline-animation"
            to="/academy"
            onClick={onLinkClick}
          >
            WORSHIP GRID ACADEMY
          </Link>
          <hr />
          <Link
            className="hover-underline-animation"
            to="/signup"
            onClick={onLinkClick}
          >
            GET ACCESS
          </Link>
          <SignIn
            show={showSignInModal}
            handleClose={closeSignInModal}
            handleSubmit={handleSubmit}
          />
        </Stack>
      )}
    </div>
  );
};

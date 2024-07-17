import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import UserContext from "../contexts/UserContext";

const NewsBanner = (props) => {
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
            // console.clear();
          }
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  let navigate = useNavigate();
  const { title, subTitle1, subTitle2, buttonText } = props;

  const handleClick = () => {
    if (userLog.user_id) {
      navigate("/featured_music");
    } else {
      window.alert("You need to sign in to your account!");
      navigate(openSignInModal());
    }
  };

  const [showSignInModal, setShowSignInModal] = useState(false);

  const openSignInModal = () => {
    setShowSignInModal(true);
  };

  const closeSignInModal = () => {
    setShowSignInModal(false);
  };
  return (
    <>
      <div className="banner">
        <h2>{title}</h2>
        <p>{subTitle1}</p>
        <p>{subTitle2}</p>
        <Button onClick={handleClick}>{buttonText}</Button>
      </div>
      <SignIn show={showSignInModal} handleClose={closeSignInModal} />
    </>
  );
};
export default NewsBanner;

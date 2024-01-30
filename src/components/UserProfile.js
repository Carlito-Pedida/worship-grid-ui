import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";

const UserProfile = () => {
  const [setUserLog] = useState("");

  let { loggedUser } = useContext(UserContext);

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

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid > Profile";
  }, []);
  return <div>UserProfile</div>;
};

export default UserProfile;

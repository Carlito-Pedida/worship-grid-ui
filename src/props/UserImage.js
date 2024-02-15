import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const UserImage = ({}) => {
  let params = useParams();
  const [userLog, setUserLog] = useState([]);

  let { getOneUser } = useContext(UserContext);

  useEffect(() => {
    async function fetchData() {
      await getOneUser(params.user_id).then((result) => setUserLog(result));
    }
    fetchData();
  }, [getOneUser, params.user_id]);
  return (
    <div>
      <img src={userLog.avatar} />
    </div>
  );
};

export default UserImage;

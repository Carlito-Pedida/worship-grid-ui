import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import moment from "moment";
import "../styles/UserProfile.css";
import { Button, Card } from "react-bootstrap";
import UserProfData from "../props/UserProfileData";

const UserProfile = () => {
  let params = useParams();
  let navigate = useNavigate();
  const [userLog, setUserLog] = useState([]);

  let { getOneUser } = useContext(UserContext);
  let { deleteUserAsset, asset } = useContext(AssetContext);

  useEffect(() => {
    async function fetchData() {
      await getOneUser(params.user_id).then((result) => setUserLog(result));
    }
    fetchData();
  }, [getOneUser, params.user_id]);

  useEffect(() => {
    document.title = "Worship Grid > Profile";
  }, []);

  return (
    <div>
      <div>
        <UserProfData
          userImage={userLog.avatar}
          firstName={userLog.first_name}
          lastName={userLog.last_name}
          city={userLog.city}
          state={userLog.state}
          teamPosition={userLog.position}
          username={userLog.username}
          memberSince={moment.parseZone(userLog.createdAt).local().format("LL")}
        />
      </div>
    </div>
  );
};

export default UserProfile;

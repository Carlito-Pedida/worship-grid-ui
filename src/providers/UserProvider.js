import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useEffect, useState } from "react";

export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState([]);
  const baseUrl = "https://worship-grid-api.vercel.app/server/users/";

  useEffect(() => {
    async function fetchData() {
      await getAllUserAssets();
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  function getAllUserAssets() {
    return axios
      .get(`https://worship-grid-api.vercel.app/server/assets/`)
      .then((response) => setLoggedUser(response.data))
      .catch((error) => console.error("Error fetching user assets:", error));
  }

  function signupUser(
    username,
    password,
    first_name,
    last_name,
    email,
    city,
    state,
    zipcode,
    position,
    avatar
  ) {
    let user = {
      username,
      password,
      first_name,
      last_name,
      email,
      city,
      state,
      zipcode,
      position,
      avatar
    };

    return axios.post(`${baseUrl}signup`, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}signin`, user).then((response) => {
      localStorage.setItem("loggedUserToken", response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function getOneUser(user_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };

    return axios.get(`${baseUrl}${user_id}`, { headers }).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateUserData(user) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };

    return axios
      .put(baseUrl + user.user_id, user, { headers })
      .then((response) => {
        getAllUserAssets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function getUserAssets(user_id) {
    const url = "https://worship-grid-api.vercel.app/server/users/assets/";
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };

    return axios.get(url + user_id, { headers }).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function deleteUserData(user_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };
    return axios.delete(baseUrl + user_id, { headers }).then((response) => {
      getAllUserAssets();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        getAllUserAssets,
        getUserAssets,
        signupUser,
        signInUser,
        getOneUser,
        updateUserData,
        deleteUserData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

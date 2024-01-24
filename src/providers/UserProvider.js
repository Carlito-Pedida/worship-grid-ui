import axios from "axios";
import UserContext from "../contexts/UserContext";
import { useContext, useEffect, useState } from "react";

export const UserProvider = (props) => {
  const [loggedUser, setLoggedUser] = useState([]);
  const baseUrl = "http://localhost:5000/server/users/";

  useEffect(() => {
    async function fetchData() {
      await getAllUserAssets();
    }
    fetchData();
  }, []); // Removed dependency array since getAllUserAssets doesn't depend on any props or state

  function getAllUserAssets() {
    return axios
      .get("http://localhost:5000/server/assets/")
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

    return axios
      .post(`${baseUrl}${user_id}`, user_id, { headers })
      .then((response) => {
        return new Promise((resolve) => resolve(response.data));
      });
  }

  return (
    <UserContext.Provider
      value={{
        loggedUser,
        getAllUserAssets,
        signupUser,
        signInUser,
        getOneUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

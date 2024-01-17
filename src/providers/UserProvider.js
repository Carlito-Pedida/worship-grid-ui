import axios from "axios";
import UserContext from "../contexts/UserContext";

export const UserProvider = (props) => {
  const baseUrl = "http://localhost:5000/server/users/";

  function signupUser(
    first_name,
    last_name,
    username,
    password,
    email,
    city,
    state,
    zipcode,
    position,
    avatar
  ) {
    let user = {
      first_name,
      last_name,
      username,
      password,
      email,
      city,
      state,
      zipcode,
      position,
      avatar
    };

    return axios.post(`${baseUrl}/signup`, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {
    let user = { username, password };

    return axios.post(`${baseUrl}/signin`, user).then((response) => {
      localStorage.setItem("loggedUserToken", response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <UserContext.Provider
      value={{
        signupUser,
        signInUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

import axios from "axios";
import UserContext from "../contexts/UserContext";

export const UserProvider = (props) => {
  const baseUrl = "http://localhost:5000/server/users/signup";

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

    return axios.post(baseUrl, user).then((response) => {
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(username, password) {}

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

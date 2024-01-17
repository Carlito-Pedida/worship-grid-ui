import axios from "axios";
import ResponseContext from "../contexts/ResponseContext";
import { useContext } from "react";
import AssetContext from "../contexts/AssetContext";

export const ResponseProvider = (props) => {
  const baseUrl = "http://localhost:5000/server/responses/";

  const { getAllUserAssets } = useContext(AssetContext);

  function createUserReply(reply) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };

    return axios.post(baseUrl, reply, { headers }).then((response) => {
      getAllUserAssets();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <ResponseContext.Provider
      value={{
        createUserReply
      }}
    >
      {props.children}
    </ResponseContext.Provider>
  );
};

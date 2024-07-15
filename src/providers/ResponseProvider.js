import axios from "axios";
import ResponseContext from "../contexts/ResponseContext";
import { useContext } from "react";
import AssetContext from "../contexts/AssetContext";

export const ResponseProvider = (props) => {
  const baseUrl = "https://worship-grid-api.vercel.app/server/responses/";

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
  function getOneUserResponse(response_id) {
    return axios.get(baseUrl + response_id).then((response) => {
      getAllUserAssets();

      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateUserResponse(response, response_id, asset_id, user_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };
    return axios
      .put(
        baseUrl + response.response_id,
        { ...response, response_id, asset_id, user_id },
        { headers }
      )
      .then((response) => {
        getAllUserAssets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function deleteUserResponse(response_id, user_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };
    return axios.delete(baseUrl + response_id, { headers }).then((response) => {
      getAllUserAssets();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <ResponseContext.Provider
      value={{
        createUserReply,
        getOneUserResponse,
        updateUserResponse,
        deleteUserResponse
      }}
    >
      {props.children}
    </ResponseContext.Provider>
  );
};

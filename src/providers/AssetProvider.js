import axios from "axios";
import { useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";

export const AssetProvider = (props) => {
  const [asset, setAsset] = useState([]);
  const baseUrl = "https://worship-grid-api.vercel.app/server/assets/";

  useEffect(() => {
    async function fetchData() {
      await getAllUserAssets();
    }
    fetchData();
  }, []);

  function getAllUserAssets() {
    return axios
      .get(baseUrl)
      .then((response) => setAsset(response.data))
      .catch((error) => console.error("Error fetching user assets:", error));
  }

  function createUserAsset(asset) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };

    return axios
      .post(`${baseUrl}create_new_asset`, asset, { headers })
      .then((response) => {
        getAllUserAssets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  function getOneUserAsset(asset_id) {
    let url = "https://worship-grid-api.vercel.app/server/assets/asset/";
    return axios.get(url + asset_id).then((response) => {
      getAllUserAssets();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function updateUserAsset(updatedAsset, user_id) {
    let url = "https://worship-grid-api.vercel.app/server/assets/asset/";
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };
    return axios
      .put(
        url + updatedAsset.asset_id,
        { ...updatedAsset, user_id },
        { headers }
      )
      .then((response) => {
        getAllUserAssets();
        return new Promise((resolve) => resolve(response.data));
      });
  }

  // function updateUserAsset(updatedAsset) {
  //   let url = "http://localhost:5000/server/assets/asset/";
  //   let headers = {
  //     Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
  //   };

  //   return axios
  //     .put(url + updatedAsset.asset_id, updatedAsset, { headers })
  //     .then((response) => {
  //       getAllUserAssets();
  //       return new Promise((resolve) => resolve(response.data));
  //     });
  // }

  function deleteUserAsset(asset_id) {
    let headers = {
      Authorization: `Bearer ${localStorage.getItem("loggedUserToken")}`
    };
    return axios.delete(baseUrl + asset_id, { headers }).then((response) => {
      getAllUserAssets();
      return new Promise((resolve) => resolve(response.data));
    });
  }

  return (
    <AssetContext.Provider
      value={{
        asset,
        getAllUserAssets,
        getOneUserAsset,
        createUserAsset,
        updateUserAsset,
        deleteUserAsset
      }}
    >
      {props.children}
    </AssetContext.Provider>
  );
};

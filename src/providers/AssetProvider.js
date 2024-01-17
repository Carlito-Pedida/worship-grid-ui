import axios from "axios";
import { useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";

export const AssetProvider = (props) => {
  const [asset, setAsset] = useState([]);
  const baseUrl = "http://localhost:5000/server/assets/";

  useEffect(() => {
    async function fetchData() {
      await getAllUserAsset();
    }
    fetchData();
  }, []);

  function getAllUserAsset() {
    return axios.get(baseUrl).then((response) => setAsset(response.data));
  }

  function getOneUserAsset(user_id) {}

  function createUserAsset(asset) {}

  function updateUserAsset(asset) {}

  function deleteUserAsset(user_id) {}

  return (
    <AssetContext.Provider
      value={{
        asset,
        getAllUserAsset,
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

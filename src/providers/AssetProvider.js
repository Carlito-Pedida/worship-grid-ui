import axios from "axios";
import { useEffect, useState } from "react";
import AssetContext from "../contexts/AssetContext";

export const AssetProvider = (props) => {
  const [asset, setAsset] = useState([]);
  const baseUrl = "http://localhost:0500/server/assets/";

  function getAllUserAsset() {}

  function getOneUserAsset(user_id) {}

  function createUserAsset(asset) {}

  function updateUserAsset(asset) {}

  function deleteUserAsset(user_id) {}

  return (
    <AssetContext.Provider
      value={{
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

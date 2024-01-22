import React, { useContext, useState } from "react";
import AssetContext from "../contexts/AssetContext";
import { useNavigate } from "react-router-dom";

const AssetNew = () => {
  const navigate = useNavigate();
  const [newAsset, setNewAsset] = useState({
    message: "",
    imageLink: "",
    videoLink: ""
  });

  const { createUserAsset } = useContext(AssetContext);

  function handleChange(event) {
    setNewAsset((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createUserAsset(newAsset)
      .then(() => {
        navigate("/assets");
      })
      .catch((error) => {
        console.log(error);
        window.alert("You need to sign in to create assets!");
      });
  }

  return (
    <div
      style={{
        backgroundColor: "rgb(51, 51, 51)",
        padding: "100px",
        margin: "50px",
        borderRadius: "25px",
        color: "white",
        opacity: "85%"
      }}
    >
      <div>
        <form onSubmit={handleSubmit}>
          <span>Message </span>
          <input
            type="text"
            name="message"
            value={newAsset.message}
            onChange={handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssetNew;

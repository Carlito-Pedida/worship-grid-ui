import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponseContext from "../contexts/ResponseContext";
import "emoji-picker-element";

const ResponseNew = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [newResponse, setNewResponse] = useState({
    asset_id: params.asset_id,
    reply: "",
    reactions: ""
  });

  const { createUserReply } = useContext(ResponseContext);

  // let { reply, reactions } = newResponse;
  let response_id = params.response_id;

  function createReply() {
    if (response_id === undefined) {
      return createUserReply(newResponse);
    }
  }

  function handleChange(event) {
    setNewResponse((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    createReply(newResponse)
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
        border: "solid #2c5728 10px",
        backgroundColor: "dimgrey",

        padding: "30px",
        borderRadius: "10px",
        margin: "45px 45px 45px 45px"

        // width: "50%"
        // position: "relative"
      }}
    >
      <form onSubmit={handleSubmit}>
        <span>Reply </span>
        <input
          type="text"
          name="reply"
          value={newResponse.reply}
          onChange={handleChange}
        />
        <span>Reactions </span>
        <select
          name="reactions"
          value={newResponse.reactions}
          onChange={handleChange}
        >
          <option>select-reaction</option>
          <option value="👍">👍</option>
          <option value="❤️">❤️</option>
          <option value="😄">😄</option>
          {/* Add more emoji options as needed */}
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};
export default ResponseNew;

import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponseContext from "../contexts/ResponseContext";

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
    <div>
      <form onSubmit={handleSubmit}>
        <span>Reply </span>
        <input
          type="text"
          name="reply"
          value={newResponse.reply}
          onChange={handleChange}
        />
        <span>Reactions </span>
        <input
          type="text"
          name="reactions"
          value={newResponse.reactions}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default ResponseNew;

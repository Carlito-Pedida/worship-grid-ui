import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const ResponseEdit = ({
  response,
  handleClose,
  handleSubmit,
  onAssetUpdate
}) => {
  let [updatedResponse, setUpdatedResponse] = useState({
    response_id: response.response_id,
    reply: response.reply,
    reactions: response.reactions
  });

  let { response_id, reply, reactions } = updatedResponse;

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedResponse((prevValue) => ({ ...prevValue, [name]: value }));
    onAssetUpdate({ ...updatedResponse, [name]: value });
  }

  return (
    <>
      <div>
        <div
          className="header"
          style={{
            backgroundColor: "#2c5728",
            color: "gray"
          }}
        ></div>
        <div
          className="body p-4"
          style={{
            backgroundColor: "grey",
            color: "white"
          }}
        >
          <div className="container grid-example">
            <div className="row">
              <div className="col" xs={6} md={4}>
                <form
                  key={response_id}
                  onSubmit={handleSubmit}
                  className="edit-form p-5"
                  style={{
                    backgroundColor: "rgb(100, 100, 100)",
                    borderRadius: "8px"
                  }}
                >
                  <Stack>
                    <p>Edit Message</p>
                    <textarea
                      className="mb-3"
                      name="reply"
                      value={reply}
                      onChange={handleChange}
                      placeholder="Message Edit"
                    />
                    <span>Reactions </span>
                    <select
                      name="reactions"
                      value={reactions}
                      onChange={handleChange}
                    >
                      <option>select-reaction</option>
                      <option value="👍">👍</option>
                      <option value="❤️">❤️</option>
                      <option value="😄">😄</option>
                      {/* Add more emoji options as needed */}
                    </select>

                    <Button
                      onClick={handleClose}
                      type="submit"
                      className="mb-3"
                      variant="success"
                    >
                      Save Changes
                    </Button>
                  </Stack>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponseEdit;

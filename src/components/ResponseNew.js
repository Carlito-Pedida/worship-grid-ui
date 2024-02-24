import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponseContext from "../contexts/ResponseContext";
import "emoji-picker-element";
import { Button, Modal, Stack } from "react-bootstrap";

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
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Modal className="p-3" centered show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: "#366532" }}
          className="divider d-flex align-items-center"
        >
          <Modal.Title
            style={{ color: "white" }}
            className="text-center mx-3 mb-0"
          >
            New Reply
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#366532",
            color: "white"
          }}
        >
          <div
            className="p-4"
            style={{
              backgroundColor: "grey",
              color: "white"
            }}
          >
            <form
              className="edit-form p-5"
              style={{
                backgroundColor: "rgb(100, 100, 100)",
                borderRadius: "8px"
              }}
              onSubmit={handleSubmit}
            >
              <Stack>
                <span>Reply</span>
                <textarea
                  className="my-3"
                  type="text"
                  name="reply"
                  value={newResponse.reply}
                  onChange={handleChange}
                />
                <span>Reactions </span>
                <select
                  style={{ height: "50px" }}
                  className="my-3"
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

                <Button type="submit" className="my-3">
                  Submit
                </Button>
              </Stack>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#366532" }}>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ResponseNew;

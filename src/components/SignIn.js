import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { Button, Modal, Form } from "react-bootstrap";
import "../styles/SignIn.css";

const SignIn = ({ show, handleClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  let { signInUser } = useContext(UserContext);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    const savedRememberMe = localStorage.getItem("rememberMe");

    if (savedUsername && savedPassword && savedRememberMe) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(savedRememberMe === "true");
    }
  }, []);

  const handleRememberMeChange = () => {
    if (rememberMe) {
      setRememberMe(false);
    } else {
      setRememberMe(true);
      window.alert("WARNING! Select only if you trust this device!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("rememberMe", rememberMe);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      localStorage.removeItem("rememberMe");
    }

    signInUser(username, password)
      .then(() => {
        window.location = "/assets";
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed Login");
      });
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          style={{ backgroundColor: "#366532" }}
          className="divider d-flex align-items-center"
        >
          <Modal.Title
            style={{ color: "white" }}
            className=" m-2 text-center mx-3 "
          >
            Sign In
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "#366532"
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "35px"
            }}
          >
            <div
              style={{
                backgroundColor: "rgb(100, 100, 100)",
                borderRadius: "8px",
                padding: "35px"
              }}
            >
              <p className="register">
                Not a member?{" "}
                <a className="register-link" href="/signup">
                  Register HERE
                </a>{" "}
                it's free!
              </p>

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                </div>

                <Button className="mb-3 w-100" variant="success" type="submit">
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#366532" }}>
          <Button
            type="submit"
            className="m-2"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;

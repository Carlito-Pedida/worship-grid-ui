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
        window.location = "/";
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
            className="text-center mx-3 mb-0"
          >
            Sign In
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundColor: "rgb(100, 100, 100)",
            padding: "35px"
          }}
        >
          <div>
            <div>
              <p className="register">
                Not a member?{" "}
                <a className="register-link" href="/signup">
                  Register
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

                <Button
                  className="mb-3 w-100"
                  variant="primary "
                  size="sm"
                  type="submit"
                >
                  Sign In
                </Button>
              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#366532" }}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SignIn;

// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");

// let { signInUser } = useContext(UserContext);

// function handleSubmit(event) {
//   event.preventDefault();
//   signInUser(username, password).then(() => {
//     window.location.href = "/assets"; // or set the desired URL
//   });
// }
{
  /* <div
      style={{
        backgroundColor: "rgb(51, 51, 51)",
        padding: "100px",
        margin: "50px",
        borderRadius: "25px",
        color: "white",
        opacity: "85%"
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>LOGIN</h1>
        <span>Username </span>
        <input
          placeholder="Enter username"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>
        <br></br>
        <span>Password </span>
        <input
          placeholder="Enter password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br></br>
        <button>Sign In</button>
      </form>
    </div> */
}

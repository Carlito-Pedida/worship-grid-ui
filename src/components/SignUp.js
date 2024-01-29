import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import { Button, Stack } from "react-bootstrap";

const SignUp = () => {
  const [first_name, setFirst_Name] = useState("");
  const [last_name, setLast_Name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [position, setPosition] = useState("");
  const [avatar, setAvatar] = useState("");

  const { signupUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    signupUser(
      username,
      password,
      first_name,
      last_name,
      email,
      city,
      state,
      zipcode,
      position,
      avatar
    )
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: error creating user");
      });
  }

  useEffect(() => {
    // Scroll to a specific element by its ID
    const targetElement = document.getElementById("targetElementId");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Alternatively, scroll to a specific position on the page
    // window.scrollTo(0, 500); // Scroll to y-coordinate 500
  }, []);

  return (
    <div
      className="centered-container"
      id="targetElementId"
      style={{
        backgroundColor: "rgb(51, 51, 51)",
        margin: "50px",
        borderRadius: "25px",
        opacity: "95%"
      }}
    >
      <div className="form-grid">
        <div className="form-image">
          <img src="/logo.png" alt="this is a logo" />
        </div>
        <div className="form-inputs">
          <form className="form-style" onSubmit={handleSubmit}>
            <Stack gap={3} className="mx-auto">
              <div className="signup-input">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="signup-input">
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  onChange={(e) => setFirst_Name(e.target.value)}
                />

                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={(e) => setLast_Name(e.target.value)}
                />
              </div>

              <input
                className="single-line-input"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="single-line-input"
                type="text"
                name="city"
                value={city}
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
              />
              <div className="signup-input">
                <input
                  type="text"
                  name="state"
                  value={state}
                  placeholder="State"
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  placeholder="Zipcode"
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <input
                className="single-line-input"
                type="text"
                name="position"
                value={position}
                placeholder="Worship Team Position"
                onChange={(e) => setPosition(e.target.value)}
              />
              <input
                className="single-line-input"
                type="text"
                name="avatar"
                value={avatar}
                placeholder="Avatar"
                onChange={(e) => setAvatar(e.target.value)}
              />
              <Button variant="success" className="p-3">
                Sign Up
              </Button>
            </Stack>
          </form>
          <Button
            onClick={() => navigate(-1)}
            variant="secondary"
            className=" mb-3 p-3"
          >
            Return to Previous Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

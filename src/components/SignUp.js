import React, { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";
import "../styles/SignUp.css";

const SignUp = () => {
  const [signUpCreds, SetSignUpCreds] = useState({
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    state: "",
    zipcode: "",
    position: "",
    avatar: ""
  });

  const { signupUser } = useContext(UserContext);

  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    SetSignUpCreds((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    signupUser(...signUpCreds)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed registration: error creating user");
      });
  }

  useEffect(() => {
    const targetElement = document.getElementById("targetElementId");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="centered-container" id="targetElementId">
      <div className="form-grid  py-2">
        <div className="form-container">
          <form className="form-style" onSubmit={handleSubmit}>
            <Stack gap={3}>
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  value={signUpCreds.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={signUpCreds.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="first_name"
                  value={signUpCreds.first_name}
                  placeholder="First Name"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="last_name"
                  value={signUpCreds.last_name}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <input
                className="single-line-input"
                type="email"
                name="email"
                value={signUpCreds.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="single-line-input"
                type="text"
                name="city"
                value={signUpCreds.city}
                placeholder="City"
                onChange={handleChange}
              />
              <div className="form-group">
                <input
                  type="text"
                  name="state"
                  value={signUpCreds.state}
                  placeholder="State"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="zipcode"
                  value={signUpCreds.zipcode}
                  placeholder="Zipcode"
                  onChange={handleChange}
                />
              </div>
              <input
                className="single-line-input"
                type="text"
                name="position"
                value={signUpCreds.position}
                placeholder="Worship Team Position"
                onChange={handleChange}
              />
              <input
                className="single-line-input"
                type="text"
                name="avatar"
                value={signUpCreds.avatar}
                placeholder="Image URL"
                onChange={handleChange}
              />
              <Button size="sm" type="submit" variant="success" className="p-2">
                Sign Up
              </Button>
              <Button
                size="sm"
                onClick={() => navigate(-1)}
                variant="secondary"
                className="p-2"
              >
                Return to Previous Page
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

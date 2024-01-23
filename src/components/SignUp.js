import React, { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

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
      first_name,
      last_name,
      username,
      password,
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
      <div className="container signup-wrapper">
        <div className="signup-col">
          <img src="/logo.png" />
        </div>
        <div className="form-col">
          <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>

            <span>First Name </span>
            <input
              placeholder="Enter First Name"
              type="text"
              name="first_name"
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Last Name </span>
            <input
              placeholder="Enter Last Name"
              type="text"
              name="last_name"
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Username </span>
            <input
              placeholder="Enter Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Password </span>
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br></br>
            <span>Email </span>
            <input
              placeholder="Enter Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>City </span>
            <input
              placeholder="Enter City"
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>State </span>
            <input
              placeholder="Enter State"
              type="text"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Zipcode </span>
            <input
              placeholder="Enter Zipcode"
              type="number"
              name="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Postition </span>
            <input
              placeholder="Enter Position"
              type="text"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <br></br>
            <br></br>
            <span>Profile Image </span>
            <input
              placeholder="Enter Image URL"
              type="text"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <br></br>
            <br></br>
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

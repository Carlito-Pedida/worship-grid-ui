import React, { useContext, useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const EditProfile = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [updateProfile, setUpdateProfile] = useState({
    user_id: params.user_id,
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

  let {
    user_id,
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
  } = updateProfile;

  let { updateUserData, getOneUser } = useContext(UserContext);

  useEffect(() => {
    if (user_id === undefined) return;
    async function fetch() {
      await getOneUser(user_id).then((response) => setUpdateProfile(response));
    }
    fetch();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdateProfile((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function updateProfileData() {
    return updateUserData(updateProfile);
  }

  function handleSubmit(event) {
    event.preventDefault();

    updateProfileData(updateProfile)
      .then(() => {
        if (!updateProfile.ok) {
          alert("Your Profile has been updated!");
        }
        navigate(`/profile/${params.user_id}/${username}`);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        alert("Profile edit unsuccesful");
        navigate(`/profile/${params.user_id}/${username}`);
      });
  }

  useEffect(() => {
    document.title = "Worship Grid > Edit Profile";
  }, []);

  return (
    <div className="centered-container" id="targetElementId">
      <div className="form-grid">
        <div className="form-image">
          <img src="/logo.png" alt="this is a logo" />
        </div>

        <div className="form-inputs">
          <form className="form-style" onSubmit={handleSubmit}>
            <Stack gap={3} className="mx-auto">
              <div
                //style={{ backgroundColor: "#366532" }}
                className="divider d-flex align-items-center"
              >
                <div
                  style={{ color: "white" }}
                  className="m-2 text-center mx-3 "
                >
                  <h4>Profile Update</h4>
                </div>
              </div>
              <div className="signup-input">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="signup-input">
                <input
                  type="text"
                  name="first_name"
                  value={first_name}
                  placeholder="First Name"
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="last_name"
                  value={last_name}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>

              <input
                className="single-line-input"
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                className="single-line-input"
                type="text"
                name="city"
                value={city}
                placeholder="City"
                onChange={handleChange}
              />
              <div className="signup-input">
                <input
                  type="text"
                  name="state"
                  value={state}
                  placeholder="State"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  placeholder="Zipcode"
                  onChange={handleChange}
                />
              </div>
              <input
                className="single-line-input"
                type="text"
                name="position"
                value={position}
                placeholder="Worship Team Position"
                onChange={handleChange}
              />
              <input
                className="single-line-input"
                type="text"
                name="avatar"
                value={avatar}
                placeholder="Image URL"
                onChange={handleChange}
              />
              <Button type="submit" variant="success" className="p-3">
                Finish Update
              </Button>
              <Button
                onClick={() => navigate(-1)}
                variant="secondary"
                className=" mb-3 p-3"
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

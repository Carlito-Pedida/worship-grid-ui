import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AssetList from "./components/AssetList";
import AssetNew from "./components/AssetNew";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import { UserProvider } from "./providers/UserProvider";
import { AssetProvider } from "./providers/AssetProvider";
import { ResponseProvider } from "./providers/ResponseProvider";
import ResponseNew from "./components/ResponseNew";
import { jwtDecode } from "jwt-decode";
import SignOut from "./components/SignOut";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("loggedUserToken");
      const userToken = jwtDecode(jwt);
      setUser(userToken);
    } catch (ex) {}
  }, []);

  return (
    <UserProvider>
      <AssetProvider>
        <ResponseProvider>
          <div style={{ textAlign: "center" }}>
            <BrowserRouter>
              <Navigation user={user} />
              <Routes>
                <Route path="/" element={<Home />} index />
                <Route path="/signup" element={<SignUp />} />

                <Route path="/signin" element={<SignIn user={user} />} />

                <Route path="/signout" element={<SignOut />} />
                <Route user={user} path="/assets" element={<AssetList />} />
                <Route path="/create" element={<AssetNew />} />
                <Route path="/:asset_id/reply" element={<ResponseNew />} />
              </Routes>
            </BrowserRouter>
          </div>
        </ResponseProvider>
      </AssetProvider>
    </UserProvider>
  );
}

export default App;

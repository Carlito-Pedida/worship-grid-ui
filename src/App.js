import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AssetList from "./components/AssetList";
import AssetNew from "./components/AssetNew";
import Home from "./components/Home";
import { UserProvider } from "./providers/UserProvider";
import { AssetProvider } from "./providers/AssetProvider";
import { ResponseProvider } from "./providers/ResponseProvider";
import ResponseNew from "./components/ResponseNew";
import { jwtDecode } from "jwt-decode";
import SignOut from "./components/SignOut";
import Navigation from "./props/Navigation";
import AboutInfo from "./components/AboutInfo";
import Footer from "./components/Footer";
import Academy from "./components/Academy";
import Merchandise from "./components/Merchandise";
import AssetEdit from "./components/AssetEdit";
import BlogArticle from "./components/BlogArticle";
import UserSetlist from "./components/UserSetlist";
import UserProfile from "./components/UserProfile";

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
                <Route path="/setlist" element={<UserSetlist user={user} />} />
                <Route path="/academy" element={<Academy />} />
                <Route path="setlist" element={<UserSetlist />} />
                <Route path="/article" element={<BlogArticle />} />
                <Route user={user} path="/assets" element={<AssetList />} />
                <Route
                  path="/profile/:username"
                  element={<UserProfile user={user} />}
                />
                <Route path="/merchandise" element={<Merchandise />} />
                <Route path="/signout" element={<SignOut />} />

                <Route path="/create" element={<AssetNew />} />
                <Route
                  path="/assets/:asset_id/reply"
                  element={<ResponseNew />}
                />
                <Route path="/assets/edit" element={<AssetEdit />} />
              </Routes>
            </BrowserRouter>
            <AboutInfo />
            <Footer />
          </div>
        </ResponseProvider>
      </AssetProvider>
    </UserProvider>
  );
}

export default App;

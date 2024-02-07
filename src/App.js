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
import Academy from "./components/Academy";
import Merchandise from "./MerchPages/Merchandise.js";
import AssetEdit from "./components/AssetEdit.js";
import UserSetlist from "./components/UserSetlist";
import UserProfile from "./components/UserProfile";
import LocateChurch from "./components/LocateChurch.js";
import Events from "./components/Events.js";
import Rss from "./components/Rss.js";
import Tutorials from "./components/Tutorials.js";
import Success from "./MerchPages/Success.js";
import Cancel from "./MerchPages/Cancel.js";
import { CartProvider } from "./providers/CartProvider.js";
import NewSongRelease from "./components/NewSong.js";

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
    <CartProvider>
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
                  <Route
                    path="/setlist"
                    element={<UserSetlist user={user} />}
                  />
                  <Route path="/academy" element={<Academy />} />
                  <Route path="setlist" element={<UserSetlist />} />
                  <Route path="/newsongrelease" element={<NewSongRelease />} />
                  <Route path="/assets" element={<AssetList />} />
                  <Route
                    path="/profile/:username"
                    element={<UserProfile user={user} />}
                  />
                  <Route path="/churchlocations" element={<LocateChurch />} />
                  <Route path="/merchandise" element={<Merchandise />} />
                  <Route path="/paysuccessful" element={<Success />} />
                  <Route path="/paycanceled" element={<Cancel />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/rss" element={<Rss />} />
                  <Route path="/tutorials" element={<Tutorials />} />
                  <Route path="/signout" element={<SignOut />} />

                  <Route path="/create" element={<AssetNew />} />
                  <Route
                    path="/asset/:asset_id/reply"
                    element={<ResponseNew />}
                  />
                  <Route
                    path="/asset/:asset_id/edit"
                    element={<AssetEdit user={user} />}
                  />
                </Routes>
              </BrowserRouter>
              <AboutInfo />
            </div>
          </ResponseProvider>
        </AssetProvider>
      </UserProvider>
    </CartProvider>
  );
}

export default App;

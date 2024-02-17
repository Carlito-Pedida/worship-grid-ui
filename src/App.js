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
import SignOut from "./components/SignOut";
import AboutInfo from "./components/AboutInfo";
import Academy from "./components/Academy";
import Merchandise from "./MerchPages/Merchandise.js";
import AssetEdit from "./components/AssetEdit.js";
import UserSetlist from "./components/UserSetlist";
import UserProfile from "./components/UserProfile";
import LocateChurch from "./components/LocateChurch.js";
import Events from "./components/Events.js";
import Rss from "./components/Rss.js";
import Success from "./MerchPages/Success.js";
import Cancel from "./MerchPages/Cancel.js";
import { CartProvider } from "./providers/CartProvider.js";
import FeaturedMusic from "./components/FeaturedMusic.js";
import PrivateRoutes from "./components/PrivateRoutes.js";
import { jwtDecode } from "jwt-decode";
import EditProfile from "./components/EditProfile.js";
import Navigation from "./components/Navigation.js";
import UserLocation from "./components/UserLocation.js";
import ChurchLocation from "./components/ChurchLocation.js";

function App() {
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   try {
  //     const jwt = localStorage.getItem("loggedUserToken");
  //     const userToken = jwtDecode(jwt);
  //     setUser(userToken);
  //   } catch (ex) {}
  // }, []);

  return (
    <CartProvider>
      <UserProvider>
        <AssetProvider>
          <ResponseProvider>
            <div style={{ textAlign: "center" }}>
              <BrowserRouter>
                <Navigation />
                <Routes>
                  <Route path="/" element={<Home />} index />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route element={<PrivateRoutes />}>
                    <Route path="/setlist" element={<UserSetlist />} />
                    <Route path="/academy" element={<Academy />} />
                    <Route path="/:user_id/setlist" element={<UserSetlist />} />
                    <Route path="/featured_music" element={<FeaturedMusic />} />
                    <Route path="/daily_devotionals" element={<Rss />} />
                    <Route path="/create" element={<AssetNew />} />
                    <Route
                      path="/asset/:asset_id/reply"
                      element={<ResponseNew />}
                    />
                    <Route
                      path="/asset/:asset_id/edit"
                      element={<AssetEdit />}
                    />
                    <Route
                      path="/profile/:user_id/:username"
                      element={<UserProfile />}
                    />
                    <Route
                      path="/profile/:user_id/edit"
                      element={<EditProfile />}
                    />
                  </Route>
                  <Route path="/assets" element={<AssetList />} />
                  <Route path="/userlocal" element={<UserLocation />} />
                  <Route path="/church_locations" element={<LocateChurch />} />
                  <Route path="/locate_churches" element={<ChurchLocation />} />
                  <Route path="/merchandise" element={<Merchandise />} />
                  <Route path="/paysuccessful" element={<Success />} />
                  <Route path="/paycanceled" element={<Cancel />} />
                  <Route path="/signout" element={<SignOut />} />
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

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutInfo from "./components/AboutInfo";
import Academy from "./components/Academy";
import AssetEdit from "./components/AssetEdit.js";
import AssetList from "./components/AssetList";
import AssetNew from "./components/AssetNew";
import EditProfile from "./components/EditProfile.js";
import FeaturedMusic from "./components/FeaturedMusic.js";
import Home from "./components/Home";
import Navigation from "./components/Navigation.js";
import PrivateRoutes from "./components/PrivateRoutes.js";
import ResponseNew from "./components/ResponseNew";
import Rss from "./components/Rss.js";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";
import UserSetlist from "./components/UserSetlist";
import Cancel from "./MerchPages/Cancel.js";
import Merchandise from "./MerchPages/Merchandise.js";
import Success from "./MerchPages/Success.js";
import SignUpSuccess from "./props/SignUpSuccess.js";
import { AssetProvider } from "./providers/AssetProvider";
import { CartProvider } from "./providers/CartProvider.js";
import { ResponseProvider } from "./providers/ResponseProvider";
import { UserProvider } from "./providers/UserProvider";

function App() {
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
                  <Route path="/signupsuccessful" element={<SignUpSuccess />} />
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

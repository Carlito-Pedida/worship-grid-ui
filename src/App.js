import React from "react";
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

function App() {
  return (
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
                <Route path="/assets" element={<AssetList />} />
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

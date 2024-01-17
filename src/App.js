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

function App() {
  return (
    <UserProvider>
      <AssetProvider>
        <div style={{ textAlign: "center" }}>
          <BrowserRouter>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} index />
              <Route path="/signup" element={<SignUp />} />

              <Route path="/signin" element={<SignIn />} />
              <Route path="/assets" element={<AssetList />} />
              <Route path="/create" element={<AssetNew />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AssetProvider>
    </UserProvider>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import AssetList from "./components/AssetList";
import AssetNew from "./components/AssetNew";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="/signup" element={<SignUp />} />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/assetlist" element={<AssetList />} />
          <Route path="/assetnew" element={<AssetNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

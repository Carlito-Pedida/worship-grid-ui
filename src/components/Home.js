import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1443186547344-2437c72a228e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8")`,
        backgroundSize: "cover",
        height: "900px"
      }}
    >
      <div>
        <h1>Welcome To Worship Grid!</h1>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Home;

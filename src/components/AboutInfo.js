import React from "react";

const AboutInfo = () => {
  return (
    <div>
      <div className="about-info">
        <div className="row">
          <div className="col">
            <a style={{ textDecoration: "none" }} href="/">
              <p>WORSHIP GRID</p>
            </a>
            <br />
            <p style={{ color: "white" }}>
              Worship Grid is a one stop resource that provides practice and
              networking tools for church musicians, singers and tech personnel.
            </p>
          </div>
          <div className="col">
            <p style={{ color: "white" }}>QUICK LINKS</p>
            <br />
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Worship Grid Academy
              </a>
            </ul>
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                BLOG
              </a>
            </ul>
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Churches In The Area
              </a>
            </ul>
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Events
              </a>
            </ul>
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                RSS
              </a>
            </ul>
            <ul>
              <a style={{ textDecoration: "none", color: "white" }} href="/">
                Tutorials
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;

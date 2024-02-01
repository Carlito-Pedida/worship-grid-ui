import React from "react";
import "../styles/AboutInfo.css";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaSquareYoutube
} from "react-icons/fa6";
import { Container } from "react-bootstrap";

const AboutInfo = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-info">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="site-desc-container">
                  <div style={{ color: "white" }}>
                    <p>ABOUT WORSHIP GRID</p>

                    <p>
                      Worship Grid is a one stop resource that provides
                      <br />
                      practice and networking tools for church musicians,
                      <br />
                      singers and tech professionals.
                    </p>
                    <img src="/logo-2.png" height={75} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="row">
                <div className="quicklinks-container">
                  <ul
                    className="quicklinks-list"
                    style={{
                      color: "white",
                      textDecoration: "none"
                    }}
                  >
                    <p>QUICK LINKS</p>
                    <li>
                      <a href="#">Worship Grid Academy</a>
                    </li>
                    <li>
                      <a href="#">BLOG</a>
                    </li>
                    <li>
                      <a href="#">Churches In The Area</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">RSS</a>
                    </li>
                    <li>
                      <a href="#">Tutorials</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="follow-container">
                  <p>FOLLOW US!</p>
                  <div className="social-icons">
                    <a href="#">
                      <FaFacebook
                        className="m-3"
                        size={35}
                        style={{ color: "blue" }}
                      />
                    </a>

                    <a href="#">
                      <FaXTwitter className="m-3" size={34} />
                    </a>

                    <a href="#">
                      <FaInstagram className="insta m-3" size={35} />
                    </a>

                    <a href="#">
                      <FaSquareYoutube
                        className="m-3"
                        size={37}
                        style={{ color: "red" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot-container">
            <div className="footer">
              <p>
                &copy; {new Date().getFullYear()} | Worship Grid Inc. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;

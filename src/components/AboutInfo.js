import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaFacebook,
  FaInstagram,
  FaSquareYoutube,
  FaXTwitter
} from "react-icons/fa6";
import styles from "../styles/AboutInfo.module.css";

const AboutInfo = () => {
  return (
    <>
      <div className={styles.aboutInfo}>
        <Row>
          <Col className="my-3" md={4}>
            <div style={{ color: "white" }}>
              <p>ABOUT WORSHIP GRID</p>
              <p>
                Worship Grid is a one stop resource that provides
                <br />
                practice and networking tools for church musicians,
                <br />
                singers and tech professionals.
              </p>
            </div>
            <div>
              <img src="/logo-2.png" height={40} alt="wg-logo-2" />
            </div>
          </Col>
          <Col className="my-3" md={4}>
            <div
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
              <p>QUICK LINKS</p>

              <p>
                <a href="/">Worship Grid Academy</a>
              </p>
              <p>
                <a href="/">BLOG</a>
              </p>
              <p>
                <a href="/">Churches In The Area</a>
              </p>
              <p>
                <a href="/">Events</a>
              </p>
              <p>
                <a href="/">RSS</a>
              </p>
              <p>
                <a href="/">Tutorials</a>
              </p>
            </div>
          </Col>
          <Col className="my-3" md={4}>
            <div className="text-white">
              <p>FOLLOW US!</p>
            </div>
            <div>
              <a href="/">
                <FaFacebook
                  className="m-3"
                  size={25}
                  style={{ color: "blue" }}
                />
              </a>
              <a href="/">
                <FaXTwitter className="m-3" size={25} />
              </a>
              <a href="/">
                <FaInstagram className="insta m-3" size={25} />
              </a>
              <a href="/">
                <FaSquareYoutube
                  className="m-3"
                  size={25}
                  style={{ color: "red" }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AboutInfo;

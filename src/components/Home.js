import React from "react";
import "../styles/Home.css";
import { Button, Card, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="banner">
        <h2>New Song Alert!</h2>
        <p>John Smith released a new single titled "Be With You"</p>
        <p>Get all the stems now in the All Access Pass!</p>
        <Button>LEARN MORE</Button>
      </div>

      <div
        className="landing-top"
        // style={{
        //   backgroundImage: `url("https://images.unsplash.com/photo-1443186547344-2437c72a228e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8")`,
        //   backgroundSize: ,
        //   height: "900px"
        // }}
      >
        <div className="sub-invite">
          <div>
            <h1 className="all-access">
              GET THE ALL ACCESS <span className="pass">PASS</span>
            </h1>
            <br />
            <h3>
              Every resource you need to make to create a condusive practice
              environment.
            </h3>
            <br />
            <p>
              Browse through all the music and practice resources to get you
              hyped up and performance ready on your weekly gig. <br />
              Pitch up or down your music to match the assigned keys in your
              setlist to make for accurate practice. <br />
              Watch all premium video tutorials from favorite musicians and
              artists!
            </p>
            <br />

            <h3>Starting at just 14.99/month</h3>

            <h4>
              Not ready to get the ALL ACCESS PASS yet?{" "}
              <span>
                Click{" "}
                <a style={{ textDecoration: "none" }} href="#">
                  <strong>HERE</strong>
                </a>{" "}
                to try it for 1 month!
              </span>
            </h4>
          </div>
          <br />

          <Button>LEARN MORE</Button>
          <br />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </>
  );
};

export default Home;

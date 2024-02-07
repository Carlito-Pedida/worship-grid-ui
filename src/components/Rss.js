// import React, { useEffect } from "react";
// import AdsBanner from "../props/AdsBanner";

// const Rss = () => {
//   useEffect(() => {
//     // Update the HTML title when the component mounts
//     document.title = "Worship Grid - RSS";

//     // Optionally, you can reset the title when the component unmounts
//     //   return () => {
//     //     document.title = "Worship Grid";
//     //   };
//   }, []);
//   return (
//     <AdsBanner
//       header="THIS IS THE PAGE FOR RSS"
//       textFx="FEEDS!"
//       subHeader="Check back next time for updates"
//       buttonText2="LEARN MORE"
//     />
//   );
// };

// export default Rss;

import React, { useState, useEffect } from "react";
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row
} from "react-bootstrap";

import moment from "moment";
import { Link } from "react-router-dom";
import "../styles/RSS.css";

const Rss = (props) => {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  useEffect(() => {
    const fetchRssFeeds = async () => {
      try {
        const response = await fetch("http://localhost:5000/server/rss/feeds");
        if (response.ok) {
          const data = await response.json();
          setArticles(data);
        }
      } catch (error) {
        console.error("Error fetching RSS feeds:", error);
      }
    };

    fetchRssFeeds();
  }, []);

  useEffect(() => {
    // Update the HTML title when the component mounts
    document.title = "Worship Grid - RSS";

    // Optionally, you can reset the title when the component unmounts
    //   return () => {
    //     document.title = "Worship Grid";
    //   };
  }, []);

  const [modalShow, setModalShow] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="rss-wrap">
      <div
        className="rss-main col-12 col-md-12 col-lg-9"
        style={{
          background: `url('https://images.unsplash.com/photo-1643148636641-fc498af944c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          position: "relative" // Necessary for absolute positioning of children
        }}
      >
        <div className="divider d-flex align-items-center my-4">
          <h4 className="text-center mx-3 mb-0">Today's Devotional</h4>
        </div>
        <div className="rss-content">
          {articles.slice(0, 1).map((item, idx) => (
            <div key={idx} className="rss-box">
              <h3>{item.title}</h3>
              <br />
              <h6>{item.contentSnippet}</h6>
              <br />

              <p style={{ color: "gray" }}>
                Published:{" "}
                {moment.parseZone(item.pubDate).local().format("LLLL")}
              </p>

              <br />
              <Button
                onClick={() => {
                  setSelectedArticle(item);
                  setModalShow(true);
                }}
              >
                Go to Article
              </Button>
              <br />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Action */}
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={modalShow}
          onHide={() => setModalShow(false)}
        >
          <div className="modal-wrap">
            <div className="modal-case">
              <Modal.Header closeButton>
                <Modal.Title className="text-white">
                  You're about to navigate to a third-party website!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4 style={{ color: "white" }}>{selectedArticle?.title}</h4>
                <Link
                  to={selectedArticle?.link}
                  className="mod-txt1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p style={{ color: "white" }}>
                    {selectedArticle?.contentSnippet}
                  </p>
                </Link>
                <p className="mod-txt2">
                  Author: {selectedArticle?.creator} | Published:{" "}
                  {moment
                    .parseZone(selectedArticle?.pubDate)
                    .local()
                    .format("LLLL")}{" "}
                </p>
              </Modal.Body>
              <Modal.Footer>
                <div className="mod-foot">
                  <div>
                    <Button
                      className="mx-2"
                      variant="success"
                      href={selectedArticle?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setModalShow(false)}
                    >
                      Go To Article
                    </Button>{" "}
                    <Button
                      variant="secondary"
                      onClick={() => setModalShow(false)}
                    >
                      Close
                    </Button>{" "}
                  </div>
                </div>
              </Modal.Footer>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Rss;

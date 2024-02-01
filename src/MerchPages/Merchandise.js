import React from "react";
import { Col, Row } from "react-bootstrap";

const Merchandise = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(51, 51, 51)",
          overflow: "hidden",
          color: "white",
          padding: "45px"
        }}
      >
        <h1>Worship Grid Store</h1>
        <Row xs={1} md={3} className="g-4">
          <Col align="center">
            <h2>Item1</h2>
          </Col>
          <Col align="center">
            <h2>Item2</h2>
          </Col>
          <Col align="center">
            <h2>Item2</h2>
          </Col>
          <Col align="center">
            <h2>Item3</h2>
          </Col>
          <Col align="center">
            <h2>Item4</h2>
          </Col>
          <Col align="center">
            <h2>Item5</h2>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Merchandise;

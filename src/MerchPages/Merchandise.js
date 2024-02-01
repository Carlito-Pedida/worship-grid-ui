import React, { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { MerchList } from "../components/MerchList";
import MerchCard from "../props/MerchCard";

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
        <h1 className="mb-5">Worship Grid Store</h1>
        <Row xs={1} md={3} className="g-4">
          {MerchList.map((item, idx) => (
            <Col align="center" key={idx}>
              <MerchCard merch={item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Merchandise;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AssetContext from "../contexts/AssetContext";
import { Button, Col, Container, Modal, Row, Stack } from "react-bootstrap";
import "../styles/AssetEdit.css";

const AssetEdit = () => {
  return (
    <>
      <div>
        <div
          className="header"
          style={{
            backgroundColor: "#2c5728",
            color: "gray"
          }}
        ></div>
        <div
          className="body p-4"
          style={{
            backgroundColor: "grey",
            color: "white"
          }}
        >
          <div className="container grid-example">
            <div className="row">
              <div className="col" xs={6} md={4}>
                <form
                  className="edit-form p-5"
                  style={{
                    backgroundColor: "rgb(100, 100, 100)",
                    borderRadius: "8px"
                  }}
                >
                  <Stack>
                    <p>Edit Message</p>
                    <textarea
                      className="mb-3"
                      name="message"
                      // value={""}
                      // onChange={""}
                      placeholder="Message Edit"
                    />
                    <p>Edit Image URL</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="imageLink"
                      // value={""}
                      // onChange={""}
                      placeholder="Image URL"
                    />
                    <p>Edit Video Link</p>
                    <input
                      className="mb-3"
                      type="text"
                      name="videoLink"
                      // value={""}
                      // onChange={""}
                      placeholder="Video URL"
                    />

                    <Button className="mb-3" variant="success">
                      Save Changes
                    </Button>
                  </Stack>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="footer p-3"
          style={{ backgroundColor: "#2c5728", color: "white" }}
        ></div> */}
      </div>
    </>
  );
};

export default AssetEdit;

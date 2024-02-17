"use client";
import React, { useEffect, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";
import { Card, Form, ListGroup } from "react-bootstrap";
import "../styles/LocateChurch.css";
import { Loader } from "@googlemaps/js-api-loader";

function LocateChurch() {
  const [openPin, setOpenPin] = useState(false);

  const position = {
    lat: 39.73747053803242,
    lng: -101.48419570154523
  };

  useEffect(() => {
    // Scroll to a specific element by its ID
    const targetElement = document.getElementById("targetElementId");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }

    // Alternatively, scroll to a specific position on the page
    window.scrollTo(0, 85); // Scroll to y-coordinate 500
  }, []);

  return (
    <div style={{ backgroundColor: "black" }} id="targetElementId">
      <div className="py-3 mb-0">
        <h3 style={{ color: "white" }}>Search Churches in the Area</h3>
      </div>

      <div className="map-wrapper pb-3">
        <div>
          <Card
            style={{
              height: "85vh",
              width: "30rem",
              border: "solid 5px green",
              borderRadius: "0"
            }}
          >
            <Card.Header>
              <div className="churchlocate divider d-flex align-items-center">
                <h4 className="text-center mx-3 mb-0">Type your location</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Form className="mb-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder="...city, state, zipcode"
                    size="lg"
                    style={{ fontStyle: "italic", borderRadius: "0" }}
                  />
                </Form.Group>
              </Form>
              <ListGroup>
                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
        <div>
          <APIProvider apiKey={process.env.REACT_APP_WG_GOOGLE_MAPS_API_KEY}>
            <div
              style={{
                height: "85vh",
                width: "100vh",
                border: "solid 5px green"
              }}
            >
              <Map
                center={position}
                zoom={5}
                mapId={process.env.REACT_APP_WG_GOOGLE_MAPS_MAP_ID}
              >
                <AdvancedMarker
                  position={position}
                  onClick={() => setOpenPin(true)}
                >
                  <Pin
                    background={"#66bf5e"}
                    borderColor={"grey"}
                    glyphColor={"white"}
                    scale={1.5}
                  />
                </AdvancedMarker>

                {openPin && (
                  <InfoWindow
                    position={position}
                    onCloseClick={() => setOpenPin(false)}
                  >
                    <h3>Home</h3>
                    <img src="/logo-2.png" height={100} />
                  </InfoWindow>
                )}
              </Map>
            </div>
          </APIProvider>
        </div>
      </div>
    </div>
  );
}

export default LocateChurch;

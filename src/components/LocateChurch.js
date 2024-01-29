"use client";
import React, { useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";

export default function LocateChurch() {
  const position = { lat: 61.2176, lng: -149.8997 };
  const [openPin, setOpenPin] = useState(false);

  return (
    <APIProvider apiKey={process.env.REACT_APP_WG_GOOGLE_MAPS_API_KEY}>
      <div style={{ height: "100vh", width: "100%" }}>
        React google Maps
        <Map
          center={position}
          zoom={14}
          mapId={process.env.REACT_APP_WG_GOOGLE_MAPS_MAP_ID}
        >
          <AdvancedMarker position={position} onClick={() => setOpenPin(true)}>
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
              <p>This is where I am at!</p>
              <img src="/logo" height={100} />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

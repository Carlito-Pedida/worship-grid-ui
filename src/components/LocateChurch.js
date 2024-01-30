"use client";
import React, { useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps";

export default function LocateChurch() {
  const position = { lat: 32.615251638542006, lng: -97.42433402306592 };
  const [openPin, setOpenPin] = useState(false);

  return (
    <APIProvider apiKey={process.env.REACT_APP_WG_GOOGLE_MAPS_API_KEY}>
      <div
        style={{
          height: "50vh",
          width: "100%"
        }}
      >
        React google Maps
        <Map
          center={position}
          zoom={10}
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
              <h3>This is where I am at!</h3>
              <img src="/logo-2.png" height={100} />
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

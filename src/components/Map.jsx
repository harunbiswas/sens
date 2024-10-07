// components/Map.js
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox CSS
import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import Sensor from "./Sensor";

const MarkerMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 18,
  });

  const [isSensor, setIsSensor] = useState(true);

  const [mapStyle, setMapStyle] = useState(
    "mapbox://styles/mapbox/streets-v11"
  ); // Default mode style

  // Toggle function for switching between map styles
  const toggleMapStyle = () => {
    setMapStyle((prevStyle) =>
      prevStyle === "mapbox://styles/mapbox/streets-v11"
        ? "mapbox://styles/mapbox/satellite-v9"
        : "mapbox://styles/mapbox/streets-v11"
    );
  };

  return (
    <div className="map">
      {/* Toggle button for switching map modes */}
      <button onClick={toggleMapStyle} className="layer-btn">
        <img
          src={
            (mapStyle === "mapbox://styles/mapbox/streets-v11" &&
              "/images/Lear.png") ||
            "/images/layer2.png"
          }
          alt=""
        />
      </button>

      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle={mapStyle} // Controlled map style state
        mapboxAccessToken={process.env.VITE_MAP_APIKEY} // Use environment variable for the token
      >
        <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
          <img
            src="/images/Camera.png" // Path to your custom marker image
            alt="Custom Marker"
            style={{
              width: "30px",
              height: "30px",
              transform: "translate(-50%, -50%)",
              objectFit: "contain",
            }}
          />
        </Marker>
        <Marker longitude={-74.006} latitude={40.7135} anchor="bottom">
          <img
            src="/images/Radio.png" // Path to your custom marker image
            alt="Custom Marker"
            style={{
              width: "30px",
              height: "30px",
              transform: "translate(-50%, -50%)",
              objectFit: "contain",
            }}
          />
        </Marker>
      </Map>
      {isSensor && <Sensor isSensor={isSensor} setIsSensor={setIsSensor} />}
    </div>
  );
};

export default MarkerMap;

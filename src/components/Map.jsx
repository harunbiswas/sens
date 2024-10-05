// components/Map.js
import "mapbox-gl/dist/mapbox-gl.css"; // Import Mapbox CSS
import { useState } from "react";
import Map, { Marker } from "react-map-gl";

const MarkerMap = () => {
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 18,
  });

  return (
    <div className="map">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
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
    </div>
  );
};

export default MarkerMap;

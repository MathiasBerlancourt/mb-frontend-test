import * as React from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapComponent() {
  return (
    <Map
      mapLib={import("mapbox-gl")}
      initialViewState={{
        longitude: 2.333333,
        latitude: 48.866667,
        zoom: 3.5,
      }}
      mapboxAccessToken={
        "pk.eyJ1IjoibWVpbGxldXJzYmllbnNpbW1vIiwiYSI6ImNreWl5aHJ6bzJoNncycG84bnZodjQ2Y3UifQ.o2b28V_Z7iyDsivsn5YWKQ"
      }
      style={{ width: "100%", height: "90vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

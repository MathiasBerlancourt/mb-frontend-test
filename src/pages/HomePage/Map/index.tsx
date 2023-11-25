import { type Ad } from "types/Ad";
import { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import AdPin from "components/MapComponents/AdPin";

interface IMapProps {
  ads: Ad[] | undefined;
}

const MapComponent = ({ ads }: IMapProps) => {
  const [popupInfo, setPopupInfo] = useState("");

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
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {ads?.map((ad, index) => (
        <AdPin
          ad={ad}
          key={`${index}-${ad.adId}`}
          popupInfo={popupInfo}
          setPopupInfo={setPopupInfo}
        />
      ))}
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </Map>
  );
};
export default MapComponent;

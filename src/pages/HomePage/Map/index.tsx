import { type Ad } from "types/Ad";
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
      style={{ width: "100%", height: "85vh" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      {ads?.map((ad, index) => (
        <AdPin ad={ad} key={`${index}-${ad.adId}`} />
      ))}
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />
    </Map>
  );
};
export default MapComponent;

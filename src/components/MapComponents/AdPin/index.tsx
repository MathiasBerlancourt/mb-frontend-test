import { Marker } from "react-map-gl";
import { type Ad } from "../../../types/Ad";
import Pin from "../Pin";

interface IAdPinProps {
  ad: Ad;
}
const AdPin = ({ ad }: IAdPinProps) => {
  return (
    <Marker
      longitude={ad.location.coordinates[0]}
      latitude={ad.location.coordinates[1]}
      anchor="bottom"
    >
      <Pin />
    </Marker>
  );
};

export default AdPin;

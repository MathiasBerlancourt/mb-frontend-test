import { Marker, Popup } from "react-map-gl";
import { type Ad } from "../../../types/Ad";
import Pin from "../Pin";
import { useAdPin } from "./logics";

interface IAdPinProps {
  ad: Ad;
  popupInfo: string;
  setPopupInfo: React.Dispatch<React.SetStateAction<string>>;
}
const AdPin = ({ ad, popupInfo, setPopupInfo }: IAdPinProps) => {
  return (
    <Marker
      longitude={ad.location.coordinates[0]}
      latitude={ad.location.coordinates[1]}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        setPopupInfo(ad.adId);
      }}
    >
      <Pin />
      {popupInfo === ad.adId && (
        <>
          <Popup
            style={{ borderRadius: "10px" }}
            anchor="top"
            longitude={ad.location.coordinates[0]}
            latitude={ad.location.coordinates[1]}
          >
            test
          </Popup>
        </>
      )}
    </Marker>
  );
};

export default AdPin;

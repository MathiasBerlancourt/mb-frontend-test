import { type Ad } from "../../../types/Ad";
import { Marker, Popup } from "react-map-gl";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Pin from "../Pin";

interface IAdPinProps {
  ad: Ad;
  popupInfo: string;
  setPopupInfo: React.Dispatch<React.SetStateAction<string>>;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
}
const AdPin = ({ ad, popupInfo, setPopupInfo, setSelectedAd }: IAdPinProps) => {
  const navigate = useNavigate();
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
        <Popup
          style={{ borderRadius: "10px" }}
          anchor="top"
          longitude={ad.location.coordinates[0]}
          latitude={ad.location.coordinates[1]}
        >
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelectedAd(ad);
              navigate(`/ad/${ad.adId}`);
            }}
          >
            <Text fontWeight={"bold"}>{ad.title}</Text>
            <Flex justifyContent={"space-around"}>
              <div>
                {ad.rooms} pièces
                <br />
                {ad.surface} m²
                <br />
                {ad.price} €<br />
              </div>
              <Image
                src={ad.pictureUrl}
                alt={ad.title}
                borderRadius="md"
                width={"35%"}
                height={"auto"}
                objectFit={"cover"}
              />
            </Flex>
            <Text overflow={"hidden"} maxHeight={"3.8em"} lineHeight={"1.2em"}>
              {ad.description}
            </Text>
            <Text textAlign={"center"}>...</Text>
          </div>
        </Popup>
      )}
    </Marker>
  );
};

export default AdPin;

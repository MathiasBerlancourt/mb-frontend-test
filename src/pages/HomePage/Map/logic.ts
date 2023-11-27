import { useContext, useState } from "react";
import AdsContext from "context";

export const useMapComponent = () => {
  const { ads, setSelectedAd } = useContext(AdsContext);
  const [popupInfo, setPopupInfo] = useState("");
  return { popupInfo, setPopupInfo, ads, setSelectedAd };
};

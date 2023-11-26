import AdsContext from "context";
import { useContext, useState } from "react";

export const useMapComponent = () => {
  const { ads } = useContext(AdsContext);
  const [popupInfo, setPopupInfo] = useState("");
  return { popupInfo, setPopupInfo, ads };
};

import { useState } from "react";

export const useMapComponent = () => {
  const [popupInfo, setPopupInfo] = useState("");
  return { popupInfo, setPopupInfo };
};

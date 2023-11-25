import { type Ad } from "types/Ad";
import { useState } from "react";

export const useAdPin = () => {
  const [popupInfo, setPopupInfo] = useState<string>("");
  return { popupInfo, setPopupInfo };
};

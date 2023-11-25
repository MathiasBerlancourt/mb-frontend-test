import { useState } from "react";
export const useAppRoot = () => {
  const [ads, setAds] = useState();
  return {
    ads,
    setAds,
  };
};

import { type Ad } from "types/Ad";
import { useState } from "react";

export const useAppRoot = () => {
  const [ads, setAds] = useState<Ad[] | undefined>();
  const [selectedAd, setSelectedAd] = useState<Ad | undefined>();

  return {
    ads,
    setAds,
    selectedAd,
    setSelectedAd,
  };
};

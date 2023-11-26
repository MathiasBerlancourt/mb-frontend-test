import { type Ad } from "types/Ad";
import { useState } from "react";

export const useAppRoot = () => {
  const [ads, setAds] = useState<Ad[] | undefined>();
  const [selectedAd, setSelectedAd] = useState<Ad | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  console.log("isLoading", isLoading);

  return {
    ads,
    setAds,
    selectedAd,
    setSelectedAd,
    isLoading,
    setIsLoading,
  };
};

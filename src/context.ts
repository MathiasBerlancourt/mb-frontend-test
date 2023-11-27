import { type Ad } from "types/Ad";
import { createContext } from "react";

interface IAdsContext {
  ads: Ad[] | undefined;
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
  selectedAd: Ad | undefined;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue: IAdsContext = {
  ads: undefined,
  setAds: () => undefined,
  selectedAd: undefined,
  setSelectedAd: () => undefined,
  isLoading: false,
  setIsLoading: () => undefined,
};

const AdsContext = createContext(initialValue);

export default AdsContext;

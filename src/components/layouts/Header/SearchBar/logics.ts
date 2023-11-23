import { useEffect, useState } from "react";
import { IAdAPIBody } from "../../../../types/AdAPIBody";
import AdsAPI from "../../../../api/AdsAPI";
import { Ad } from "../../../../types/Ad";

const initialState: IAdAPIBody = {
  latitude: 48.8588897,
  longitude: 2.320041,
  radius: 10,
  type: "rent",
};

export const useSearchBar = (
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>
) => {
  const [searchAdBody, setSearchAdBody] = useState<IAdAPIBody>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await AdsAPI.listAds(searchAdBody);
        setAds(response.data.ads);
      } catch (error) {
        setError(
          "Une erreur s'est produite lors de la récupération des annonces."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchAdBody, setAds]);

  return {
    searchAdBody,
    setSearchAdBody,
    isLoading,
    error,
  };
};

import { useEffect, useState } from "react";
import { IAdAPIBody } from "../../../../types/AdAPIBody";
import AdsAPI from "../../../../api/AdsAPI";
import { Ad } from "../../../../types/Ad";
import axios from "axios";
import { Coordinates } from "../../../../types/Coordinates";

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
        console.log("retour API, Ads:", response.data.ads);
      } catch (error) {
        setError(
          "Une erreur s'est produite lors de la récupération des annonces."
        );
        console.log("ERROR:", error);
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

export const useGeocoding = (address: string) => {
  const [addressCoordinates, setAddressCoordinates] = useState<Coordinates>({
    latitude: 48.8588897,
    longitude: 2.320041,
  });
  //   const [response, setResponse] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${address}&limit=5`
        );
        response.data.features[0].geometry &&
          setAddressCoordinates(response.data.features[0].geometry.coordinates);

        console.log("adressCoordinates:", addressCoordinates);
      } catch (error) {
        if (!typeof (address === undefined)) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [address]);

  return {
    addressCoordinates,
  };
};

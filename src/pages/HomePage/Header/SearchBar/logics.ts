import { type IAdAPIBody } from "types/AdAPIBody";
import { type Ad } from "types/Ad";
import { useEffect, useState } from "react";
import AdsAPI from "api/AdsAPI";
import GeoCoding from "api/fetchGeocoding";

const initialState: IAdAPIBody = {
  latitude: 0,
  longitude: 0,
  radius: 100,
  type: "rent",
};

export const useSearchBar = (
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>
) => {
  const [searchAdBody, setSearchAdBody] = useState<IAdAPIBody>(initialState);
  const [addressInput, setAddressInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAds = async () => {
    try {
      setIsLoading(true);
      const response = await AdsAPI.listAds(searchAdBody);
      setAds(response.data.ads);
    } catch (error) {
      setError(
        "Une erreur s'est produite lors de la récupération des annonces."
      );
      console.log("ERROR:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchGeocoding = async () => {
    try {
      const response = await GeoCoding.fetchCoordinates(addressInput);
      if (response.features[0].geometry) {
        setSearchAdBody({
          ...searchAdBody,
          longitude: response.features[0].geometry.coordinates[0],
          latitude: response.features[0].geometry.coordinates[1],
        });
      }
    } catch (error) {
      if (!typeof (addressInput === undefined)) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchGeocoding();
    //eslint-disable-next-line
  }, [addressInput]);

  const handleSubmit = () => {
    fetchAds();
  };

  return {
    addressInput,
    setAddressInput,
    searchAdBody,
    setSearchAdBody,
    isLoading,
    error,
    handleSubmit,
  };
};

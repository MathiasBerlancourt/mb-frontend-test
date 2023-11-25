import { type Ad } from "types/Ad";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface IAdCardProps {
  ad: Ad;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
}

const AdCard = ({ ad, setSelectedAd }: IAdCardProps) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => {
        navigate(`/ad/${ad.adId}`);
        setSelectedAd(ad);
      }}
      key={ad.adId}
      borderBottom="1px"
      borderColor="gray.200"
      py={2}
    >
      <Heading size="sm">{ad.title}</Heading>
      <Text fontSize="sm" color="gray.500">
        {ad.location.city}, {ad.location.regionCode}
      </Text>
      <Text fontSize="sm" color="gray.500">
        {ad.price} €
      </Text>
    </Box>
  );
};

export default AdCard;

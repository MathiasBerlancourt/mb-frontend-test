import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { Ad } from "../../types/Ad";

interface AdCardProps {
  ad: Ad;
}

const AdCard: React.FC<AdCardProps> = ({ ad }) => {
  return (
    <Box key={ad.adId} borderBottom="1px" borderColor="gray.200" py={2}>
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
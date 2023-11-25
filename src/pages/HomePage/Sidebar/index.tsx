import { type Ad } from "types/Ad";
import { useMemo } from "react";
import { Box, Heading, Skeleton, Text, Flex } from "@chakra-ui/react";
import AdCard from "../../../components/AdsComponents/AdCard";

interface ISidebarUIComponentProps {
  ads: Ad[] | undefined;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
}

const SidebarUIComponent = ({
  ads,
  setSelectedAd,
}: ISidebarUIComponentProps) => {
  const renderAds = () => {
    if (ads) {
      return ads.map((ad, index) => (
        <AdCard
          key={`${ad.adId}-${index}`}
          ad={ad}
          setSelectedAd={setSelectedAd}
        />
      ));
    } else {
      return (
        <Flex justifyContent="center" alignItems="center">
          <Text fontSize={"xs"} color={"gray.500"}>
            Rechercher un bien en vente ou en location sur toutes les
            plateformes de diffusions
          </Text>
        </Flex>
      );
    }
  };

  return (
    <Box className={"sidebar"}>
      <Box className={"sidebar-header"}>
        <Heading size={"md"}>Recherche de biens</Heading>
      </Box>
      <Box className={"sidebar-content"}>{renderAds()}</Box>
    </Box>
  );
};

export default SidebarUIComponent;

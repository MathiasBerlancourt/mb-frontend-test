import { Box, Heading, Text, Flex, List, Skeleton } from "@chakra-ui/react";
import AdCard from "../../../components/AdsComponents/AdCard";
import AdsContext from "context";
import { useContext, useMemo } from "react";

const SidebarUIComponent = () => {
  const { ads, setSelectedAd, isLoading } = useContext(AdsContext);

  const renderAds = useMemo(() => {
    if (isLoading) {
      return <Skeleton h={"100%"} w={"100%"}></Skeleton>;
    } else if (ads) {
      return (
        <List>
          {ads.map((ad, index) => (
            <AdCard
              key={`${ad.adId}-${index}`}
              ad={ad}
              setSelectedAd={setSelectedAd}
            />
          ))}
        </List>
      );
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
  }, [isLoading, ads]);

  return (
    <Box className={"sidebar"}>
      <Box className={"sidebar-header"}>
        <Heading size={"md"}>Recherche de biens</Heading>
      </Box>
      <Box className={"sidebar-content"}>{renderAds}</Box>
    </Box>
  );
};

export default SidebarUIComponent;

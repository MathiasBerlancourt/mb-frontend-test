import { type Ad } from "types/Ad";
import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";
import AdCard from "../../../components/AdsComponents/AdCard";

interface ISidebarUIComponentProps {
  ads: Ad[] | undefined;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
}

const SidebarUIComponent = ({
  ads,
  setSelectedAd,
}: ISidebarUIComponentProps) => {
  return (
    <Box className={"sidebar"}>
      <Box className={"sidebar-header"}>
        <Heading size={"md"}>Recherche de biens</Heading>
        <Text fontSize={"xs"} color={"gray.500"}>
          Rechercher un bien en vente ou en location sur toutes les plateformes
          de diffusions
        </Text>
      </Box>
      <Box className={"sidebar-content"}>
        {ads ? (
          ads.map((ad) => (
            <AdCard key={ad.adId} ad={ad} setSelectedAd={setSelectedAd} />
          ))
        ) : (
          <Skeleton w={"100%"} h={"100%"} />
        )}
      </Box>
    </Box>
  );
};

export default SidebarUIComponent;

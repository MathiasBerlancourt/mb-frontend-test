import { Box, Heading, Skeleton, Text } from "@chakra-ui/react";

import { Ad } from "../../../types/Ad";
import React from "react";
import AdCard from "../../AdCard";

interface SidebarUIComponentProps {
  ads: Ad[] | undefined;
}

const SidebarUIComponent: React.FC<SidebarUIComponentProps> = ({ ads }) => {
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
          ads.map((ad) => <AdCard key={ad.adId} ad={ad} />)
        ) : (
          <Skeleton w={"100%"} h={"100%"} />
        )}
      </Box>
    </Box>
  );
};

export default SidebarUIComponent;

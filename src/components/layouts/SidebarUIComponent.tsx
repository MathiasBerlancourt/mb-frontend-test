import {
  Box,
  Drawer,
  DrawerContent,
  Heading,
  Skeleton,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { Ad } from "../../types/Ad";
import React from "react";

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
          ads.map((ad) => (
            <Box key={ad.adId} borderBottom="1px" borderColor="gray.200" py={2}>
              <Heading size="sm">{ad.title}</Heading>
              <Text fontSize="sm" color="gray.500">
                {ad.location.city}, {ad.location.regionCode}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {ad.price} €
              </Text>
            </Box>
          ))
        ) : (
          <Skeleton w={"100%"} h={"100%"} />
        )}
      </Box>
    </Box>
  );
};

export default SidebarUIComponent;

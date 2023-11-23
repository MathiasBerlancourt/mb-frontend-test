import {Box, Drawer, DrawerContent, Heading, Skeleton, Text, useColorModeValue, useDisclosure} from "@chakra-ui/react";
import React from "react";

const SidebarUIComponent = () => {
    return (
        <Box className={"sidebar"}>
            <Box className={"sidebar-header"}>
                <Heading size={"md"}>Recherche de biens</Heading>
                <Text fontSize={'xs'} color={'gray.500'}>Rechercher un bien en vente ou en location sur toutes les plateformes de diffusions</Text>
            </Box>
            <Box className={"sidebar-content"}>
               <Skeleton w={'100%'} h={'100%'}/>
            </Box>
        </Box>
    )
}

export default SidebarUIComponent;

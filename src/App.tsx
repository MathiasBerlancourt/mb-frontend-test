import React from 'react';
import {Flex} from "@chakra-ui/react";
import SidebarUIComponent from "./components/layouts/SidebarUIComponent";
import './styles/globals.scss';
import MapComponent from "./components/MapComponent";

function App() {
    return (
        <Flex className="app-structure">
            <SidebarUIComponent/>
            <MapComponent/>
        </Flex>
    );
}

export default App;

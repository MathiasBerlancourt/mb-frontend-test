import { useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import SidebarUIComponent from "./components/layouts/SidebarUIComponent";
import "./styles/globals.scss";
import MapComponent from "./components/MapComponent";
import Header from "./components/layouts/Header/Header";
import { Ad } from "./types/Ad";

function App() {
  const [ads, setAds] = useState<Ad[]>();
  return (
    <>
      <Heading>
        <Header setAds={setAds} />
      </Heading>

      <Flex className="main-structure">
        <SidebarUIComponent ads={ads} />
        <MapComponent />
      </Flex>
    </>
  );
}

export default App;

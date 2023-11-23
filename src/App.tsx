import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import SidebarUIComponent from "./components/layouts/SidebarUIComponent";
import "./styles/globals.scss";
import MapComponent from "./components/MapComponent";
import Header from "./components/layouts/Header/Header";
import { Ad } from "./types/Ad";

function App() {
  const [ads, setAds] = useState<Ad[]>();
  return (
    <>
      <Flex className="app-structure">
        <Header setAds={setAds} />
        <SidebarUIComponent />
        <MapComponent />
      </Flex>
    </>
  );
}

export default App;

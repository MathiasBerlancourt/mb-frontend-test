import { Flex } from "@chakra-ui/react";
import MapComponent from "./Map/index";
import SidebarUIComponent from "./Sidebar/index";
import Header from "./Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <Flex className="main-structure">
        <SidebarUIComponent />
        <MapComponent />
      </Flex>
    </>
  );
};
export default HomePage;

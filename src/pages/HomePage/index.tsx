import { type Ad } from "types/Ad";
import { Flex } from "@chakra-ui/react";
import MapComponent from "../../components/layouts/Map/index";
import SidebarUIComponent from "../../components/layouts/Sidebar/index";

interface HomePageProps {
  ads: Ad[] | undefined;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
}

const HomePage = ({ ads, setSelectedAd }: HomePageProps) => {
  return (
    <Flex className="main-structure">
      <SidebarUIComponent ads={ads} setSelectedAd={setSelectedAd} />
      <MapComponent ads={ads} />
    </Flex>
  );
};
export default HomePage;

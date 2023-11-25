import { type Ad } from "types/Ad";
import { Flex } from "@chakra-ui/react";
import MapComponent from "./Map/index";
import SidebarUIComponent from "./Sidebar/index";

interface IHomePageProps {
  ads: Ad[] | undefined;
  setSelectedAd: React.Dispatch<React.SetStateAction<Ad | undefined>>;
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}

const HomePage = ({ ads, setSelectedAd, setAds }: IHomePageProps) => {
  return (
    <Flex className="main-structure">
      <SidebarUIComponent ads={ads} setSelectedAd={setSelectedAd} />
      <MapComponent ads={ads} />
    </Flex>
  );
};
export default HomePage;

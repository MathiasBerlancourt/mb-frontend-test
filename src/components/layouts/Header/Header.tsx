import { Ad } from "../../../types/Ad";
import Logo from "./Logo";
import SearchBar from "./SearchBar/index";
import { Flex, Box } from "@chakra-ui/react";
import "../../../styles/globals.scss";

interface ISidebarUIComponentProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}
const Header = ({ setAds }: ISidebarUIComponentProps) => {
  return (
    <Flex className="header">
      <Logo />
      <SearchBar setAds={setAds} />
    </Flex>
  );
};

export default Header;

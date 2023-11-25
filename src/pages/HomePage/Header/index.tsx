import { type Ad } from "types/Ad";
import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchBar from "./SearchBar/index";
import "styles/globals.scss";

interface ISidebarUIComponentProps {
  setAds: React.Dispatch<React.SetStateAction<Ad[] | undefined>>;
}
const Header = ({ setAds }: ISidebarUIComponentProps) => {
  return (
    <Flex width="100%" flexDirection="row" gap={4} alignItems="center" py={4}>
      <Logo />
      <SearchBar setAds={setAds} />
    </Flex>
  );
};

export default Header;

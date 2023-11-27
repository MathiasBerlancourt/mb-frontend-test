import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import SearchBar from "./SearchBar/index";
import "styles/globals.scss";

const Header = () => {
  return (
    <Flex
      width="100%"
      flexDirection="row"
      gap={4}
      alignItems="center"
      py={6}
      px={2}
    >
      <Logo />
      <SearchBar />
    </Flex>
  );
};

export default Header;

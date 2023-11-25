import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../../styles/assets/logo.svg";
import "../../../styles/components/header.scss";

const Logo = () => {
  return (
    <Box boxSize="s">
      <Image src={logo} alt="logo" className="logo" />
    </Box>
  );
};

export default Logo;

import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../../../styles/assets/mb.comlogo.jpeg";
import "../../../styles/components/header.scss";

const Logo = () => {
  return (
    <Box boxSize="sm">
      <Image src={logo} alt="logo" className="logo" />
    </Box>
  );
};

export default Logo;

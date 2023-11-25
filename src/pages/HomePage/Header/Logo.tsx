import { Stack, Image } from "@chakra-ui/react";
import logo from "styles/assets/logo.svg";
import "styles/components/header.scss";

const Logo = () => {
  return (
    <Stack width="20%">
      <Image src={logo} alt="logo" />;
    </Stack>
  );
};

export default Logo;

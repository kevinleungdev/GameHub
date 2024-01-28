import logo from "../assets/logo.png";
import { HStack, Image, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="50px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;

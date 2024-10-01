import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import Telphone from "../ui/telephone/Telphone";
import DrawerMenu from "../ui/drawer/DrawerMenu";
import Logo from "../ui/logo/Logo";

const Header = () => {
  return (
    <Box
      backdropFilter={"blur(10px)"}
      pos={"fixed"}
      top={0}
      w={"full"}
      zIndex={"99"}
    >
      <Container maxW={"1438px"}>
        <Flex align={"center"} justify={"space-between"} h={"60px"}>
          <Box display={{ sm: "none", md: "block", base: "none" }}>
            <Logo />
          </Box>
          <Flex display={{ md: "none", base: "flex" }} align={"end"} gap={3}>
            <Logo />
            <DrawerMenu />
          </Flex>
          <Flex
            display={{ sm: "none", md: "flex", base: "none" }}
            align={"center"}
            gap={5}
          >
            <Nav />
          </Flex>
          <Telphone />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

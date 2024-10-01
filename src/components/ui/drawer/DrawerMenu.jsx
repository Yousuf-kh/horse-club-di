import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  const navs = [
    {
      name: "О нас",
      path: "/about",
    },
    {
      name: "Услуги и цели",
      path: "/services",
    },
    {
      name: "Фотоальбом",
      path: "/gallery",
    },
    {
      name: "Контакты",
      path: "/contact",
    },
  ];
  return (
    <>
      <Button
        bg={"transparent"}
        border={"2px solid #008139"}
        onClick={onOpen}
        display={"flex"}
        gap={2}
        alignItems={"center"}
      >
        <Text color={"#008139"}>
          <GiHamburgerMenu />
        </Text>
        Меню
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Box onClick={onClose}>
              <Logo />
            </Box>
          </DrawerHeader>
          <DrawerBody>
            <Box pt={"100px"}>
              {navs.map((c, i) => (
                <Link onClick={onClose} key={i} to={c.path}>
                  <Text
                    fontSize={"20px"}
                    textAlign={"center"}
                    py={5}
                    _hover={{ bg: "#ccc" }}
                    borderRadius={"5px"}
                    my={3}
                  >
                    {c.name}
                  </Text>
                </Link>
              ))}
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;

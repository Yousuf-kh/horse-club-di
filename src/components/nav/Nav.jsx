import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
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
      {navs.map((c, i) => (
        <Text key={i}>
          <Link to={c.path}>{c.name}</Link>
        </Text>
      ))}
      <Flex gap={3} align={"center"}>
        <BsFillTelephoneFill />
        <Box>
          <Text>+7 (000) 000-00-00</Text>
          <Text>Ежедневно 9:00 – 22:00</Text>
        </Box>
      </Flex>
    </>
  );
};

export default Nav;

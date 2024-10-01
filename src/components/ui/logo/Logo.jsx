import { Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <Image w={"152px"} src="/logo.png" />
    </Link>
  );
};

export default Logo;

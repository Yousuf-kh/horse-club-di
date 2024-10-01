import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({ img, heading, text }) => {
  return (
    <Box textAlign={"center"}>
      <Image mx={"auto"} src={img} />
      <Heading py={4} color={"#0B0B0B"} fontSize={"19px"}>
        {heading}
      </Heading>
      <Text fontSize={"15px"} color={"#7E7E7E"}>
        {text}
      </Text>
    </Box>
  );
};

export default Card;

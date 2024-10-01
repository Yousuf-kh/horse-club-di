import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Title = ({ heading, text }) => {
  return (
    <Box textAlign={"center"} py={"50px"}>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </Box>
  );
};

export default Title;

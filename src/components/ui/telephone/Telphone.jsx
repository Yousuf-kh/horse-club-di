import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Telphone = () => {
  return (
    <Flex
      display={{ md: "none", lg: "none", sm: "flex" }}
      gap={3}
      align={"center"}
    >
      <BsFillTelephoneFill display={{ base: "10px", sm: "10px" }} />
      <Box fontSize={{ base: "10px", sm: "10px" }}>
        <Text>+7 (000) 000-00-00</Text>
        <Text>Ежедневно 9:00 – 22:00</Text>
      </Box>
    </Flex>
  );
};

export default Telphone;

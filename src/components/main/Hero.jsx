import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Hero = () => {
  return (
    <Box
      bgImage={"/bg.jpg"}
      w={"full"}
      h={"100vh"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      pos={"relative"}
    >
      <Image
        src={"/cloud.png"}
        pos={"absolute"}
        w={"full"}
        bottom={"0"}
        h={"170px"}
      />
      <Container maxW={"1438px"}>
        <Flex
          pt={"120px"}
          justify={{ md: "space-between", sm: "center", base: "center" }}
        >
          <Box textAlign={{ md: "start", base: "center", sm: "center" }}>
            <Heading
              fontWeight={"700"}
              fontSize={{ lg: "57px", md: "50px", sm: "30px", base: "30px" }}
            >
              Окунитесь в мир <br /> лошадей вместе с нами
            </Heading>
            <Text
              py={"20px"}
              fontSize={{ lg: "24px", md: "20px", sm: "18px", base: "15px" }}
              color={"#646464"}
            >
              Уроки верховой езды, фотосессии и мероприятия <br /> в частном
              конном клубе г.{" "}
              <Box as={"span"} fontWeight={"700"}>
                Санкт-Петербург
              </Box>
            </Text>
            <Button
              w={"200px"}
              h={"50px"}
              bg={"#f1e101"}
              _hover={{ bg: "gold" }}
              color={"#6A5300"}
              fontSize={"15px"}
            >
              записаться
            </Button>
          </Box>
          <Image
            display={{ base: "none", md: "none", lg: "block" }}
            w={"40%"}
            objectFit={"contain"}
            src="/horse.png"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero;

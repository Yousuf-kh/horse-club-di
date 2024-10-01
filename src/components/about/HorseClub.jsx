import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import AboutSecond from "../aboutSecond/AboutSecond";
import Title from "../ui/title/title";

const HorseClub = () => {
  return (
    <Box pt={"10vh"}>
      <Container maxW={"1438px"}>
        <Title heading={"О нашем клубе"} text={""} />
        <Flex
          justify={"space-between"}
          flexDir={{ lg: "row", sm: "column", base: "column" }}
          h={{ lg: "70vh", sm: "auto", base: "auto" }}
          align={"center"}
        >
          <Image
            src={"/about.png"}
            w={{ lg: "40%", sm: "100%", base: "100%" }}
          />

          <Box w={{ lg: "40%", sm: "100%", base: "100%" }}>
            <Flex justify={{ lg: "space-between", sm: "space-evenly" }}>
              <Box w={"200px"}>
                <Heading color={"#008139"}>1100+</Heading>
                <Text color={"#000"}>
                  Довольный посетителей <br /> за последний год
                </Text>
              </Box>
              <Box w={"200px"}>
                <Heading color={"#008139"}>50+</Heading>
                <Text color={"#000"}>
                  Проведенных мероприятий <br /> за 6 месяцев
                </Text>
              </Box>
            </Flex>
            <Flex
              justify={{ lg: "space-between", sm: "space-evenly" }}
              pt={"50px"}
            >
              <Box w={"200px"}>
                <Heading color={"#008139"}>20+</Heading>
                <Text color={"#000"}>
                  Выпущенных профессиональных спортсменов за 1 год
                </Text>
              </Box>
              <Box w={"200px"}>
                <Heading color={"#008139"}>15+</Heading>
                <Text color={"#000"}>
                  Регулярный занятий в неделю с профессионалами
                </Text>
              </Box>
            </Flex>
            <Text pt={"41px"}>
              Занятия проводятся индивидуально и в группах, стоимость
              также будет зависеть от ваших навыков и умений. Более выгодные
              условия предусмотрены для регулярных занятий при покупке
              абонементов. Для тех, кто хочет отточить своё мастерство,
              разработаны программы по специализации (конкур, выездка и другие),
              участие в соревнованиях и чемпионатах. Для самых маленьких
              любителей лошадей действуют пони-клубы, где ребята учатся
              ухаживать за животными и ездить на милых и добрых пони.
            </Text>
          </Box>
        </Flex>

        <AboutSecond />
      </Container>
    </Box>
  );
};

export default HorseClub;

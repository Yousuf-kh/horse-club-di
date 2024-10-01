import { Box, Container, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Title from "../ui/title/title";

const Services = () => {
  const cards = [
    {
      img: "/img1.png",
      title: "Уроки верховой езды",
      text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
      img: "/img2.png",
      title: "Прогулки верхом с тренером",
      text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
    {
      img: "/img3.png",
      title: "Фотосессииы",
      text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
      img: "/img4.png",
      title: "Прогулки верхом с тренером",
      text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
    {
      img: "/img5.png",
      title: "Фотосессии",
      text: "Уроки профессиональной верховой езды для любителей и начинающих",
    },
    {
      img: "/img6.png",
      title: "Прогулки верхом с тренером",
      text: "Тренировка клиентов, подготовка к занятиям конным спортом на профессиональном уровне под руководством опытных теннеров",
    },
  ];

  return (
    <Box
      bg={"#fff"}
      bgImage={"url(/services.png)"}
      bgSize={"cover"}
      bgPos={"bottom"}
      pt={"10vh"}
      bgRepeat={"no-repeat"}
      bgAttachment={"fixed"}
    >
      <Container maxW={"1438px"}>
        <Title heading={"Направления клуба"} text={"Подзаголовок блока"} />

        <Grid
          gridTemplateColumns={"repeat(auto-fit, minmax(330px, 1fr))"}
          gap={"30px"}
          alignItems={{ lg: "start", sm: "center", base: "center" }}
        >
          {cards.map((c, i) => (
            <Box
              mb={"30px"}
              p={"25px"}
              bg={"#fff"}
              h={"auto"}
              textAlign={"center"}
              mt={{
                md: 0,
                lg: i == 4 ? "22px" : 0,
                sm: 0,
                base: 0,
              }}
              key={i}
            >
              <Image transform={"translateY(-50px)"} src={c.img} w={"100%"} />
              <Heading fontSize={"23px"} color={"#363434"}>
                {c.title}
              </Heading>
              <Box w={"26px"} h={"1px"} bg={"#008139"} mx={"auto"} my={"25px"}>
                -
              </Box>
              <Text fontSize={"15px"} color={"#7E7E7E"}>
                {c.text}
              </Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

import { Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../ui/card/AboutCard";
import { aboutCardData } from "../ui/card/aboutCardData";
import Title from "../ui/title/title";

const AboutSecond = () => {
  return (
    <Box py={"50px"}>
      <Title heading={"Почему нас выбирают"} text={"Подзаголовок блока"} />

      <Grid gridTemplateColumns={"repeat(auto-fit, minmax(330px, 1fr))"}>
        {aboutCardData.map((c, i) => (
          <Card key={i} heading={c.heading} text={c.text} img={c.img} />
        ))}
      </Grid>
    </Box>
  );
};

export default AboutSecond;

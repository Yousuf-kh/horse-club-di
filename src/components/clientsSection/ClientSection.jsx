import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Title from "../ui/title/title";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import { A11y, Autoplay } from "swiper/modules";

const ClientSection = () => {
  const slide = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
  ];
  return (
    <Box>
      <Title heading={"Наши посетители"} text={""} />
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        modules={[A11y, Autoplay]}
        loop={"true"}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 2000,
        }}
        centeredSlides={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 4,
          },
          480: {
            slidesPerView: 2,
          },
        }}
      >
        {slide.map((c, i) => (
          <SwiperSlide key={i}>
            <Image w={"100%"} h={"300px"} objectFit={"cover"} src={c} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        spaceBetween={0}
        slidesPerView={4}
        modules={[A11y, Autoplay]}
        loop={"true"}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 3000,
          reverseDirection: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },
        }}
      >
        {slide.reverse().map((c, i) => (
          <SwiperSlide key={i}>
            <Image w={"100%"} h={"300px"} objectFit={"cover"} src={c} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientSection;

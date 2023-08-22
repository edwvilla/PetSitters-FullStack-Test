import React from "react";
import { Box } from "@mui/material";
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";

export default function Carousel() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactCarousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
      >
        <CarouselItem image={image1} />
        <CarouselItem image={image2} />
        <CarouselItem image={image3} />
        <CarouselItem image={image4} />
      </ReactCarousel>
    </Box>
  );
}

const CarouselItem = ({ image }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={image} alt="Item" />
    </Box>
  );
};

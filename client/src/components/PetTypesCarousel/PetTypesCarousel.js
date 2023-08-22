import React from "react";

import { Carousel } from "@trendyol-js/react-carousel";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const CarouselItem = ({ Name, Color }) => {
  return (
    <Box
      sx={{
        height: 80,
        mr: 2,
        ml: 2,
        backgroundColor: "#2e333d",
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" color={"primary"}>
        {Name}
      </Typography>
    </Box>
  );
};

export default function PetTypesCarousel() {
  return (
    <Carousel
      show={5}
      slide={2}
      transition={0.5}
      swiping={true}
      swipingScroll={1}
      infinite={true}
      showArrows={true}
      showIndicator={true}
      showStatus={true}
      sx={{
        p: 3,
      }}
    >
      <CarouselItem Name="Gatos" Color="#f27a1a" />
      <CarouselItem Name="Perros" Color="#d53f8c" />
      <CarouselItem Name="Hurones" Color="#16be48" />
      <CarouselItem Name="Conejos" Color="#3f51b5" />
      <CarouselItem Name="Gatos" Color="#f27a1a" />
      <CarouselItem Name="Perros" Color="#d53f8c" />
      <CarouselItem Name="Hurones" Color="#16be48" />
      <CarouselItem Name="Conejos" Color="#3f51b5" />
      <CarouselItem Name="Gatos" Color="#f27a1a" />
      <CarouselItem Name="Perros" Color="#d53f8c" />
      <CarouselItem Name="Hurones" Color="#16be48" />
      <CarouselItem Name="Conejos" Color="#3f51b5" />
      <CarouselItem Name="Gatos" Color="#f27a1a" />
      <CarouselItem Name="Perros" Color="#d53f8c" />
      <CarouselItem Name="Hurones" Color="#16be48" />
      <CarouselItem Name="Conejos" Color="#3f51b5" />
    </Carousel>
  );
}

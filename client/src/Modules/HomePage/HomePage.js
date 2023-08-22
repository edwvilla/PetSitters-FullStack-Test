import React from "react";
import Carousel from "../../components/Carousel/Carousel";

import { useSelector } from "react-redux";
import { authSelector } from "../../store/reducers/authSlice";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PetTypesCarousel from "../../components/PetTypesCarousel/PetTypesCarousel";
import Footer from "../../components/Footer/Footer";

import banner from "../../assets/banner.png";

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Carousel />
      </Box>

      <PetTypesCarousel />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          pt: 10,
          pb: 10,
        }}
      >
        <Button variant="contained">
          <Typography
            variant="h5"
            color={"text.primary"}
            onClick={() => {
              window.location.href = "/petsitters";
            }}
          >
            Encontrar cuidador
          </Typography>
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 5,
        }}
      >
        <img
          alt="banner"
          src={banner}
          style={{
            width: "100%",
            height: 240,
            objectFit: "cover",
          }}
        />
      </Box>

      <Footer />
    </Box>
  );
}

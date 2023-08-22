import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import BASE_URL from "../../services/base_url";
import API from "../../services";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";
import StarRatings from "react-star-ratings";
import { petNameToEmoji } from "../../utils/functions";
import { Get } from "react-axios";

export default function PetSitterCard({ petsitter }) {
  const goToProfile = () => {
    window.location.href = "/petsitters/" + petsitter.id;
  };

  return (
    <Card
      sx={{
        display: "flex",
        m: "20px 30px 20px 30px",
        onHover: {
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          pointer: "cursor",
        },
        width: 850,
        height: 200,
      }}
      onClick={goToProfile}
    >
      <CardMedia
        component="img"
        sx={{ width: 200, objectFit: "cover" }}
        image={petsitter.photoURL}
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 650,
          height: 200,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{
                color: "text.secondary",
                fontWeight: "bold",
                fontSize: "1.3rem",
                mt: 1,
              }}
            >
              {petsitter.name + " " + petsitter.lastname}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />

            <Get url={"/review/average/" + petsitter.id}>
              {(error, response, isLoading) => {
                if (error) {
                  return <div />;
                } else if (isLoading) {
                  return <div>Cargando...</div>;
                } else if (
                  response !== null &&
                  response.data.length !== 0 &&
                  response.data.average !== null
                ) {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        mt: 0.5,
                      }}
                    >
                      <Typography
                        component="div"
                        variant="h5"
                        sx={{
                          color: "text.secondary",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                          paddingRight: "10px",
                        }}
                      >
                        {response.data.average.toFixed(1)}
                      </Typography>
                      <div width="100px" />
                      <StarRatings
                        rating={response.data.average}
                        starRatedColor="gold"
                        numberOfStars={5}
                        name="rating"
                        starDimension="20px"
                        starSpacing="1px"
                      />
                    </Box>
                  );
                } else {
                  return <div />;
                }
              }}
            </Get>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1,
            }}
          >
            <HomeIcon
              sx={{
                mr: 0.5,
                mb: 0.3,
                color: "text.secondary",
                width: 20,
                height: 20,
              }}
            />
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{ fontSize: ".9rem" }}
            >
              {petsitter.city + ", " + petsitter.state}
            </Typography>
          </Box>

          <Get url={"/petsitter_pettypes_relation/" + petsitter.id}>
            {(error, response, isLoading) => {
              if (error) {
                return <div />;
              } else if (isLoading) {
                return <div>Cargando...</div>;
              } else if (response !== null && response.data.length !== 0) {
                return (
                  <Box>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ fontSize: ".9rem", ml: 0.5 }}
                    >
                      Mascotas que puede cuidar:
                    </Typography>
                    {response.data.map((pettype) => (
                      <Chip
                        key={pettype.id}
                        label={
                          petNameToEmoji[pettype.description.toLowerCase()] +
                          " " +
                          pettype.description
                        }
                        variant="outlined"
                        sx={{ mr: 0.5 }}
                      />
                    ))}
                  </Box>
                );
              } else {
                return <div />;
              }
            }}
          </Get>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={goToProfile}>Ver perfil</Button>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}

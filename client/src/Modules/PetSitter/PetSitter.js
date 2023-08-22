import React from "react";
import { Get } from "react-axios";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Button, Divider } from "@mui/material";
import StarRatings from "react-star-ratings";
import Chip from "@mui/material/Chip";
import { petNameToEmoji } from "../../utils/functions";

const timeStampToSpanishDate = (date) => {
  const dateObject = new Date(date);
  return (
    dateObject.getDate() +
    "/" +
    (dateObject.getMonth() + 1) +
    "/" +
    dateObject.getFullYear()
  );
};

export default function PetSitter() {
  const param = useParams();
  return (
    <Get url={"/petsitter/withlocations/" + param.id}>
      {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
          return <div />;
        } else if (isLoading) {
          return <div>Loading...</div>;
        } else if (response !== null) {
          const petsitter = response.data;
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                justifyContent: "center",
                mt: 10,
              }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 250, objectFit: "cover" }}
                  image={petsitter.photoURL}
                  alt="Live from space album cover"
                />
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
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.3rem",
                    mt: 1,
                  }}
                >
                  {"Edad: " + petsitter.age + " años"}
                </Typography>
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.3rem",
                    mt: 1,
                    mb: 2,
                  }}
                >
                  {petsitter.city + ", " + petsitter.state}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mb: 2,
                  }}
                >
                  AGENDAR
                </Button>
              </Card>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 5,
                }}
              >
                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.3rem",
                    mb: 2,
                  }}
                >
                  Datos de contacto
                </Typography>

                <Divider />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      mr: 1,
                    }}
                  >
                    {"Correo electrónico:   "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "primary.main",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      window.location.href = "mailto:" + petsitter.email;
                    }}
                  >
                    {petsitter.email}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "text.secondary",
                      mr: 1,
                    }}
                  >
                    {"Telefono:   "}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "primary.main",
                      ":hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={() => {
                      window.location.href = "tel:" + petsitter.phone;
                    }}
                  >
                    {petsitter.phone}
                  </Typography>
                </Box>

                <Typography
                  component="div"
                  variant="h5"
                  sx={{
                    color: "text.secondary",
                    fontSize: "1.3rem",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  Mascotas que puede cuidar
                </Typography>

                <Divider />
                <Get url={"/petsitter_pettypes_relation/" + petsitter.id}>
                  {(error, response, isLoading) => {
                    if (error) {
                      return <div />;
                    } else if (isLoading) {
                      return <div>Cargando...</div>;
                    } else if (
                      response !== null &&
                      response.data.length !== 0
                    ) {
                      return (
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            mt: 1,
                          }}
                        >
                          {response.data.map((pettype) => (
                            <Chip
                              key={pettype.id}
                              label={
                                petNameToEmoji[
                                  pettype.description.toLowerCase()
                                ] +
                                " " +
                                pettype.description
                              }
                              variant="outlined"
                              sx={{ margin: 0.5, width: "100px" }}
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
                    mt: 5,
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      color: "text.secondary",
                      fontSize: "1.3rem",
                      mt: 1,
                      mb: 2,
                    }}
                  >
                    Opiniones de clientes
                  </Typography>

                  <Divider />

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
                              mt: 1,
                              mb: 3,
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

                  <Get url={"/review/petsitter/" + petsitter.id}>
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
                        return response.data.map((review) => {
                          return (
                            <Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  mt: 1,
                                }}
                              >
                                <Typography
                                  component="div"
                                  variant="h5"
                                  sx={{
                                    color: "text.secondary",
                                    fontWeight: "bold",
                                    fontSize: ".9rem",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {review.rating.toFixed(1)}
                                </Typography>
                                <StarRatings
                                  rating={review.rating}
                                  starRatedColor="gold"
                                  numberOfStars={5}
                                  name="rating"
                                  starDimension="14px"
                                  starSpacing="1px"
                                />
                              </Box>
                              <Typography
                                component="div"
                                variant="h5"
                                sx={{
                                  color: "text.secondary",
                                  fontSize: ".9rem",
                                  mt: 1,
                                  fontStyle: "italic",
                                }}
                              >
                                "{review.comment}" - Usuario anónimo
                              </Typography>

                              <Typography
                                component="div"
                                variant="h5"
                                sx={{
                                  color: "text.secondary",
                                  fontSize: ".8rem",
                                  mt: 1,
                                }}
                              >
                                Enviado el{" "}
                                {timeStampToSpanishDate(review.createdAt)}
                              </Typography>
                            </Box>
                          );
                        });
                      } else {
                        return (
                          <Typography
                            component="div"
                            variant="h5"
                            sx={{
                              color: "text.secondary",
                              fontSize: ".9rem",
                              mt: 1,
                              fontStyle: "italic",
                            }}
                          >
                            No hay opiniones disponibles.
                          </Typography>
                        );
                      }
                    }}
                  </Get>
                </Box>
              </Box>
            </Box>
          );
        }
        return <div />;
      }}
    </Get>
  );
}

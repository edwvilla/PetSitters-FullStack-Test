import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import { searchSelector } from "../../store/reducers/searchSlice";
import API from "../../services";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

export default function SearchContainer() {
  const [petsittersList, setPetsittersList] = React.useState([]);
  const [results, setResults] = React.useState([]);

  useEffect(() => {
    API.get("/petsitter")
      .then((response) => {
        setPetsittersList(response.data);
      })
      .catch((error) => {});
  }, []);

  const search = useSelector(searchSelector).value;

  useEffect(() => {
    try {
      const filteredResults = petsittersList.filter((petsitter) => {
        return (
          petsitter.name.toLowerCase().includes(search.toLowerCase()) ||
          petsitter.lastname.toLowerCase().includes(search.toLowerCase())
        );
      });

      setResults(filteredResults);
    } catch (error) {}
  }, [search]);

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 10,
        right: "0",
        width: "60%",
        mr: "20%",
        ml: "10%",

        backgroundColor: "#373c46",
      }}
    >
      {results.map((petsitter) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "900px",
              mt: 2,
              pl: 3,
              pr: 3,
              opacity: "1",
            }}
            onClick={() => {
              window.location.href = "/petsitters/" + petsitter.id;
            }}
          >
            <Typography
              component="div"
              sx={{
                color: "text.secondary",
                mb: 1,
                ":hover": {
                  cursor: "pointer",
                  color: "#f50057",
                },
              }}
            >
              {petsitter.name + " " + petsitter.lastname}
            </Typography>
            <Divider />
          </Box>
        );
      })}
    </Box>
  );
}

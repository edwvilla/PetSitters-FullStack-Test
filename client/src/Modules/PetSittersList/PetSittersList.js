import React, { useEffect } from "react";
import API from "../../services";
import PetSitterCard from "./PetSitterCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Get } from "react-axios";
import { Select } from "@mui/material";

export default function PetSittersList() {
  const [petsittersList, setPetsittersList] = React.useState([]);
  const [filteredPetsittersList, setFilteredPetsittersList] = React.useState(
    []
  );

  useEffect(() => {
    API.get("/petsitter/withlocations")
      .then((response) => {
        setPetsittersList(response.data);
        setFilteredPetsittersList(response.data);
      })
      .catch((error) => {});
  }, []);

  const availableStates = petsittersList.map((petsitter) => {
    return petsitter.state;
  });
  const uniqueStates = [...new Set(availableStates)];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 1,
      }}
    >
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
        }}
      >
        <Typography
          component="div"
          variant="h5"
          sx={{
            color: "text.secondary",
            mt: 2,
            mb: 2,
            ml: 3,
          }}
        >
          {filteredPetsittersList.length + " cuidadores disponibles."}
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            component="div"
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              mt: 2,
              mb: 2,
              ml: 3,
            }}
          >
            Filtrar por Estado:
          </Typography>
          <Select
            native
            defaultValue="Todos"
            sx={{ ml: 3, mb: 2 }}
            onChange={(event) => {
              if (event.target.value === "Todos") {
                setFilteredPetsittersList(petsittersList);
                return;
              }

              const newPetSitters = petsittersList.filter(
                (petsitter) => petsitter.state === event.target.value
              );

              setFilteredPetsittersList(newPetSitters);
            }}
          >
            <option value="Todos">Todos</option>
            {uniqueStates.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </Select>
        </Box>
      </Box>

      {filteredPetsittersList && (
        <ul>
          {filteredPetsittersList.map((petsitter) => (
            <PetSitterCard key={petsitter.id} petsitter={petsitter} />
          ))}
        </ul>
      )}
    </Box>
  );
}

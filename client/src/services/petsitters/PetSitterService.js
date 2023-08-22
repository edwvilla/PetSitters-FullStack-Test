import API from "..";

const PetSittersList = () => {
  return API.get("/petsitters");
};

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root/Root";
import Error from "./Error/Error";
import PetSitter from "./PetSitter/PetSitter";
import UpdatePetSitter from "./PetSitter/update/UpdatePetSitter";
import HomePage from "./HomePage/HomePage";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
import PetSittersList from "./PetSittersList/PetSittersList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/petsitters",
        element: <PetSittersList />,
      },
      {
        path: "/petsitters/:id",
        element: <PetSitter />,
      },
      {
        path: "/petsitters/:id/edit",
        element: <UpdatePetSitter />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;

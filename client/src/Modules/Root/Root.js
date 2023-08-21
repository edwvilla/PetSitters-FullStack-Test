import React, { Component } from "react";
import { Provider } from "react-redux";
import Box from "@mui/material/Box";
import SignUp from "../SignUp/SignUp";
import NavBar from "../../components/NavBar/NavBar";
import HomePage from "../HomePage/HomePage";

import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";

import store from "../../store";

export default function Root() {
  return (
    <Provider store={store}>
      <Box>
        <NavBar />
        <NotificationContainer />
        <Outlet />
      </Box>
    </Provider>
  );
}

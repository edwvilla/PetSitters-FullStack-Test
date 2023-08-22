import React from "react";
import { Provider } from "react-redux";
import Box from "@mui/material/Box";
import NavBar from "../../components/NavBar/NavBar";

import { Outlet } from "react-router-dom";
import NotificationContainer from "../../components/NotificationContainer/NotificationContainer";

import store from "../../store";
import { AxiosProvider } from "react-axios";
import API from "../../services";
import { ThemeProvider } from "@emotion/react";
import theme from "../../Theme/Theme";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

export default function Root() {
  return (
    <Provider store={store}>
      <AxiosProvider instance={API}>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              backgroundColor: "background.default",
              minHeight: "100vh",
            }}
          >
            <NavBar />
            <SearchContainer />
            <NotificationContainer />
            <Outlet />
          </Box>
        </ThemeProvider>
      </AxiosProvider>
    </Provider>
  );
}

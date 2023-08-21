import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

import { useSelector, useDispatch } from "react-redux";
import { authSelector, logout } from "../../store/reducers/authSlice";

export default function NavBar() {
  const goToSignUp = () => {
    window.location.href = "/signup";
  };

  const goToLogin = () => {
    window.location.href = "/login";
  };

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  const isLoggedIn = !!auth.value;
  console.log("NavBar", isLoggedIn);
  console.log("NavBar", auth);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              PetSitter
            </Typography>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={goToSignUp}>
                Crear cuenta
              </Button>
              <Button color="inherit" onClick={goToLogin}>
                Iniciar sesión
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleLogout}>
                Cerrar sesión
              </Button>{" "}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#00e676",
    },
    secondary: {
      main: "#00b0ff",
    },
    info: {
      main: "#1de9b6",
    },
    background: {
      default: "#060608",
      paper: "#020916",
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

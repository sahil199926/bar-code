import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto Flex"
  },
  palette: {
    mode: "light",
    common: {
      black: "#1E1E1E",
      white: "#F7F9FA",
    },
    primary: {
      main: "#1975D2",
      light: "#51A0EF",
      contrastText: "#F7F9FA",
    },
    text: {
      primary: "#2D2D2D",
      secondary: "#00000099",
      disabled: "#1E1E1E66",
    },
    action: {
      disabled: "#51A0EF",
    },
    divider: "#D9D9D9",
  },
});

export default theme;

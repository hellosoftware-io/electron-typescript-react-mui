import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#8E44AD",
    },
    secondary: {
      main: "#9575CD",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 17,
    h1: {
      fontSize: "2.7rem",
      fontWeight: 700,
      color: "#000000",
    },
  },
});

export default theme;

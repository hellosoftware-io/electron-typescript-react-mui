import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9EEAF9",
    },
    secondary: {
      main: "#9575CD",
    },
    background: {
      default: "#2C2E3B",
    },
  },
  typography: {
    fontWeightMedium: 600,
    fontSize: 17,
    h1: {
      fontSize: "2.2rem",
      fontWeight: 400,
      color: "#9EEAF9",
    },
  },
});

export default theme;

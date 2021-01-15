import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: ["Shadows Into Light", "cursive", "Raleway", "sans-serif"].join(
      ","
    ),
  }
});
const {
  breakpoints,
  typography: { pxToRem },
} = defaultTheme;

// Create a theme instance.
const theme = {
  ...defaultTheme,

  overrides: {
    MuiTypography: {
      h2: {
        fontSize: "5rem",
        [breakpoints.down("xs")]: {
          fontSize: "2.5rem",
        },
        [breakpoints.up("sm")]: {
          fontSize: "3rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "4rem",
        },
        
      },
      h4: {
        [breakpoints.down("xs")]: {
          fontSize: "1rem",
        },
        [breakpoints.up("sm")]: {
          fontSize: "2rem",
        },
        [breakpoints.up("md")]: {
          fontSize: "3rem",
        },
      },
      body2: {
        fontFamily: "Raleway"
      }
    },
  },
};

export default theme;

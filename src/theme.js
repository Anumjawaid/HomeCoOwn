import { createTheme, rgbToHex } from "@mui/material/styles";
import { red, blue } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // Custom primary color
      },
      secondary: {
        main: '#dc004e', // Custom secondary color
      },
      background: {
        default: '#f5f5f5', // Custom background color
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
      },
      body1: {
        fontSize: '1rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8, // Custom border radius for buttons
          },
        },
      },
    },
  });
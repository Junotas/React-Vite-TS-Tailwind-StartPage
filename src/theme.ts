import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    third: string; // Add 'third' property
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      light: "#9c4dcc", // Light shade of purple
      main: "#6a1b9a",  // Main purple
      dark: "#38006b",  // Dark shade of purple
      contrastText: "#ffffff", // Text color for primary
    },
    secondary: {
      light: "#ff79b0", // Light shade of pinkish-red
      main: "#ff4081",  // Main pinkish-red
      dark: "#c60055",  // Dark shade of pinkish-red
      contrastText: "#000000", // Text color for secondary
    },
    text: {
      primary: "#ffffff",     // White for primary text
      secondary: "#e0e0e0",   // Light gray for secondary text
    },
    background: {
      default: "#6a1b9a",     // Main purple as background
      paper: "#ffffff",       // White paper elements
      third: "rgba(255, 255, 255, 0.1)", // Semi-transparent white overlay
    },
  },
});
import { createTheme } from "@mui/material";
import palette from "./palette"

const customTheme = createTheme({
  typography: {
    fontFamily: [
      '"Athiti"',
      'sans-serif',
    ].join(','),
  },
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 770,
      lg: 900,
      xl: 1200
    }
  },
})

export default customTheme;
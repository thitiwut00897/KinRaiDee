import { createTheme } from "@mui/material";
import palette from "./palette"

const customTheme = {
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
}

export default createTheme(customTheme);
import * as Mui from "@mui/material";

export const PaletteLight = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    primary: {
      main: Mui.colors.teal[400],
    },
  },
});

export const PaletteDark = (): Pick<Mui.ThemeOptions, "palette"> => ({
  palette: {
    primary: {
      main: Mui.colors.cyan[900],
    },
  },
});

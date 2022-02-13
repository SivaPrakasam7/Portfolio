import * as Mui from "@mui/material";

export const Components = (): Pick<Mui.ThemeOptions, "components"> => ({
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          width: "fit-content",
          textTransform: "capitalize",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: `1px solid ${Mui.colors.grey[200]}`,
          "&:hover": {
            boxShadow: "0 2px 5px #00000050",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          height: "100%",
        },
      },
    },
  },
});

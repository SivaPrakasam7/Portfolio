import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import React from "react";
import * as Theme from "src/themes";

export const ThemeSwitch = () => {
  const { mode, changeMode } = React.useContext(Theme.ThemeContext);
  return (
    <Mui.IconButton
      onClick={changeMode}
      sx={{
        position: "fixed",
        bgcolor: "primary.main",
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
        bottom: 10,
        right: 10,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        "&:hover": {
          bgcolor: "primary.main",
        },
      }}
    >
      {mode ? (
        <MuiIcons.DarkMode sx={{ color: "#fff" }} />
      ) : (
        <MuiIcons.LightMode sx={{ color: "#fff" }} />
      )}
    </Mui.IconButton>
  );
};

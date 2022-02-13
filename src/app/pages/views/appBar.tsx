import * as Mui from "@mui/material";

export const AppBar = () => {
  const trigger = Mui.useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return (
    <Mui.AppBar
      elevation={trigger ? 5 : 0}
      sx={{
        bgcolor: trigger ? "background.default" : "transparent",
      }}
    >
      <Mui.Stack direction="row" component={Mui.Toolbar}>
        <Mui.Typography
          variant="h5"
          sx={{ color: trigger ? "primary.main" : undefined }}
        >
          Developer
        </Mui.Typography>
      </Mui.Stack>
    </Mui.AppBar>
  );
};

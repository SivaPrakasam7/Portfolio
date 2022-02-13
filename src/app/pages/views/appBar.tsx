import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Assets from "src/assets";

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
        <Mui.Box flexGrow={1} />
        <Mui.Button variant="contained" href={Assets.Resume} download>
          Get Resume
        </Mui.Button>
        <Mui.IconButton component={Mui.Link} href="https://wa.me/916374399577">
          <MuiIcons.WhatsApp color="primary" fontSize="large" />
        </Mui.IconButton>
      </Mui.Stack>
    </Mui.AppBar>
  );
};

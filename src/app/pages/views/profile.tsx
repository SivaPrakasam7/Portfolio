import * as Mui from "@mui/material";
import * as Assets from "src/assets";

export const Profile = () => (
  <Mui.Stack
    alignItems="center"
    justifyContent="center"
    sx={{ height: { md: "90vh" }, position: "relative" }}
  >
    <Mui.Avatar
      src={Assets.OldMe}
      sx={{
        height: { xs: 200, sm: 300 },
        width: { xs: 200, sm: 300 },
        opacity: 0.9,
        boxShadow: "0 0 20px 20px #00000050",
      }}
    />
    <Mui.Avatar
      src={Assets.CorrectedBG}
      sx={{
        height: { xs: 200, sm: 300 },
        width: { xs: 200, sm: 300 },
        opacity: 0.7,
        position: "absolute",
      }}
    />
  </Mui.Stack>
);

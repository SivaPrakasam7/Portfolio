import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

export const WebApps = () => (
  <Mui.Box>
    <Mui.Stack direction="row" alignItems="center" spacing={1} sx={{ py: 1 }}>
      <MuiIcons.Apps color="primary" sx={{ fontSize: 30 }} />
      <Mui.Typography variant="h4" color="primary">
        My Apps
      </Mui.Typography>
    </Mui.Stack>
    <Mui.Grid container spacing={2}>
      <Mui.Grid item xs={12}>
        <Mui.Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          sx={{ m: 5 }}
        >
          <MuiIcons.Error sx={{ color: "text.secondary" }} />
          <Mui.Typography variant="h6" color="text.secondary">
            Sorry about that, I'll update soon. You can always view by my
            projects.
          </Mui.Typography>
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Box>
);

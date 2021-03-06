import * as Mui from "@mui/material";
import * as Pages from "src/app/pages";
import * as Assets from "src/assets";

export const Main = () => (
  <>
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <Mui.Box
      sx={{
        backgroundImage: `url('${Assets.Bg}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Pages.Views.AppBar />
      <Mui.Container sx={{ pt: 10 }}>
        {/* <Pages.Views.ThemeSwitch /> */}
        <Mui.Grid container spacing={5}>
          <Mui.Grid item xs={12} md={6}>
            <Pages.Views.HeaderContent />
          </Mui.Grid>
          <Mui.Grid item xs={12} md={6}>
            <Pages.Views.Profile />
          </Mui.Grid>
          <Mui.Grid item xs={12}>
            <Pages.Views.Support />
          </Mui.Grid>
          <Mui.Grid item xs={12}>
            <Pages.Views.WebApps />
          </Mui.Grid>
          <Mui.Grid item xs={12}>
            <Pages.Views.Projects />
          </Mui.Grid>
          <Mui.Grid item xs={12}>
            <Pages.Views.Experience />
          </Mui.Grid>
          <Mui.Grid item xs={12}>
            <Pages.Views.Contact />
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Container>
      <Pages.Views.Footer />
    </Mui.Box>
  </>
);

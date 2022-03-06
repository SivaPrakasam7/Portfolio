import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Assets from "src/assets";

export const Support = () => (
  <Mui.Box>
    <Mui.Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ py: 1, width: "100%" }}
    >
      <MuiIcons.Code color="primary" sx={{ fontSize: 30 }} />
      <Mui.Typography variant="h4" color="primary">
        Services
      </Mui.Typography>
    </Mui.Stack>
    <Mui.Grid container spacing={2}>
      <Mui.Grid item xs={12} md={6}>
        <Mui.CardMedia src={Assets.Freelauncer} component="img" />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack spacing={2}>
          <Mui.Button
            component={Mui.Link}
            href="mailto:prakasams22@gmail.com"
            variant="contained"
            startIcon={<MuiIcons.Email />}
            sx={{ alignSelf: "flex-end" }}
          >
            Mail
          </Mui.Button>
          <Mui.Stack spacing={1}>
            <Mui.Stack direction="row" alignItems="center" spacing={1}>
              <Mui.Typography
                variant="h6"
                color="primary.dark"
                sx={{
                  px: 1.3,
                  height: "fit-content",
                  borderRadius: 100,
                  border: (theme) => `1px solid ${theme.palette.primary.dark}`,
                }}
              >
                1
              </Mui.Typography>
              <Mui.Typography variant="h6" color="primary">
                Contribution
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - I'm interested to learn new things by collaborating with others
              projects.
            </Mui.Typography>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - Feel free to ping me for your Interesting project ideas or
              concepts.
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Stack spacing={1}>
            <Mui.Stack direction="row" alignItems="center" spacing={1}>
              <Mui.Typography
                variant="h6"
                color="primary.dark"
                sx={{
                  px: 1.3,
                  height: "fit-content",
                  borderRadius: 100,
                  border: (theme) => `1px solid ${theme.palette.primary.dark}`,
                }}
              >
                2
              </Mui.Typography>
              <Mui.Typography variant="h6" color="primary">
                Hire me
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - I provide my best with your team.
            </Mui.Typography>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - You can also verify resume. Let me help you.
            </Mui.Typography>
          </Mui.Stack>
          <Mui.Stack spacing={1}>
            <Mui.Stack direction="row" alignItems="center" spacing={1}>
              <Mui.Typography
                variant="h6"
                color="primary.dark"
                sx={{
                  px: 1.3,
                  height: "fit-content",
                  borderRadius: 100,
                  border: (theme) => `1px solid ${theme.palette.primary.dark}`,
                }}
              >
                3
              </Mui.Typography>
              <Mui.Typography variant="h6" color="primary">
                Web developement
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - If you've already choosed any theme send me.
            </Mui.Typography>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - If you don't have any theme, No problem we'll make a dicussion
              about your thoughts.
            </Mui.Typography>
            <Mui.Typography variant="body1" sx={{ pl: 5 }}>
              - I can help to you in Portfolio and Other web app based on your
              requirements.
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Box>
);

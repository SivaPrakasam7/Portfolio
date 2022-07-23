import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";

export const Projects = () => (
  <Mui.Box>
    <Mui.Stack direction="row" alignItems="center" spacing={1} sx={{ py: 1 }}>
      <MuiIcons.AccountTree color="primary" sx={{ fontSize: 30 }} />
      <Mui.Typography variant="h4" color="primary">
        Projects
      </Mui.Typography>
    </Mui.Stack>
    <Mui.Grid container spacing={2}>
      {Constants.PROJECTS.map((project, index) => (
        <Mui.Grid item xs={12} md={6}>
          <Project key={index} {...project} />
        </Mui.Grid>
      ))}
    </Mui.Grid>
  </Mui.Box>
);

const Project = ({
  image,
  title,
  collaborators,
  content,
  github,
  deployed_url,
  maintanance,
  framework,
  time,
}: projects) => (
  <Mui.Card
    sx={{
      height: "100%",
      position: "relative",
      background: "#ffffff10",
      "&::before": {
        content: `'${title}'`,
        position: "absolute",
        // borderColor: "primary.main",
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
        height: 50,
        width: { xs: "100%", sm: 350 },
        top: -1,
        left: -1,
        borderBottomRightRadius: 50,
        p: 1,
        pl: 2,
        color: "primary.main",
        fontSize: 20,
        fontWeight: 600,
      },
      "&::after": {
        content: `'${time}'`,
        position: "absolute",
        bgcolor: "primary.main",
        height: 30,
        width: 70,
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        p: 1,
        pl: 2,
        color: "#fff",
        fontSize: 12,
      },
      border: (theme) =>
        `1px solid ${Mui.colors.grey[200]}${
          theme.palette.mode === "dark" ? "20" : ""
        }`,
      "&:hover": {
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 2px 5px #ffffff50"
            : "0 2px 5px #00000050",
      },
    }}
  >
    <Mui.Grid container>
      {/* <Mui.Grid item xs={12} sm={12}>
        <Mui.CardMedia
          component="img"
          src={image}
          sx={{ maxHeight: 200, objectFit: "cover" }}
        />
      </Mui.Grid> */}
      <Mui.Grid item xs={12} sm={12}>
        <Mui.Stack spacing={1} component={Mui.CardContent}>
          <Mui.Stack
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Mui.Box flexGrow={1} />
            <Mui.AvatarGroup
              max={4}
              sx={{ "& 	.MuiAvatar-root": { height: 30, width: 30 } }}
            >
              {collaborators.map((src, index) => (
                <Mui.Avatar src={src} key={index} />
              ))}
            </Mui.AvatarGroup>
          </Mui.Stack>
          <Mui.Typography variant="caption" color="primary">
            {framework}
          </Mui.Typography>
          <Mui.Typography variant="body2" color="text.secondary">
            {content}
          </Mui.Typography>
          <Mui.Stack spacing={2} direction="row">
            <Mui.Button
              variant="contained"
              size="small"
              component={Mui.Link}
              href={github}
              target="_blank"
            >
              github
            </Mui.Button>

            {deployed_url ? (
              maintanance ? (
                <Mui.Button variant="contained" size="small" disabled>
                  Maintanace
                </Mui.Button>
              ) : (
                <Mui.Button
                  variant="contained"
                  size="small"
                  component={Mui.Link}
                  href={deployed_url}
                  target="_blank"
                >
                  View
                </Mui.Button>
              )
            ) : (
              <Mui.Button
                size="small"
                variant="contained"
                component={Mui.Link}
                href="https://tryhackme.com/p/SivaPrakasam"
                target="_blank"
              >
                Tryhackme
              </Mui.Button>
            )}
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Card>
);

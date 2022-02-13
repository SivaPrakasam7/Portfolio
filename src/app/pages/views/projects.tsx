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
  <Mui.Card sx={{ height: "100%", position: "relative" }}>
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
            <Mui.Typography variant="h6">{title}</Mui.Typography>
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
          <Mui.Typography
            variant="caption"
            color="primary"
            sx={{ position: "absolute", bottom: 10, right: 10 }}
          >
            {time}
          </Mui.Typography>
        </Mui.Stack>
      </Mui.Grid>
    </Mui.Grid>
  </Mui.Card>
);

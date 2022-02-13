import * as Mui from "@mui/material";
import * as MuiIcons from "@mui/icons-material";
import * as Constants from "src/constants";

export const Experience = () => (
  <Mui.Box>
    <Mui.Stack direction="row" alignItems="center" spacing={1} sx={{ py: 1 }}>
      <MuiIcons.Work color="primary" sx={{ fontSize: 30 }} />
      <Mui.Typography variant="h4" color="primary">
        Experience
      </Mui.Typography>
    </Mui.Stack>
    <Mui.Grid container spacing={2}>
      {Constants.EXPERIENCE.map((experience, index) => (
        <Mui.Grid item xs={12} md={6}>
          <ExperienceCard key={index} {...experience} />
        </Mui.Grid>
      ))}
    </Mui.Grid>
  </Mui.Box>
);

const ExperienceCard = ({
  logo,
  position,
  time,
  company,
  description,
}: experience) => (
  <Mui.Card sx={{ maxWidth: "sm", position: "relative" }}>
    <Mui.Stack
      component={Mui.CardContent}
      spacing={2}
      direction="row"
      alignItems="center"
    >
      <Mui.Avatar src={logo} sx={{ height: 70, width: 70 }} />
      <Mui.Stack spacing={1} sx={{ width: "100%" }}>
        <Mui.Typography variant="h6">{position}</Mui.Typography>
        <Mui.Typography
          variant="caption"
          color="text.secondary"
          sx={{ position: "absolute", top: 5, right: 10 }}
        >
          {time}
        </Mui.Typography>
        <Mui.Typography
          variant="body2"
          color="primary"
          component={Mui.Stack}
          alignItems="center"
          direction="row"
        >
          <MuiIcons.LocationOn fontSize="inherit" />
          {company}
        </Mui.Typography>
        <Mui.Typography variant="body2" color="text.secondary">
          {description}
        </Mui.Typography>
      </Mui.Stack>
    </Mui.Stack>
  </Mui.Card>
);

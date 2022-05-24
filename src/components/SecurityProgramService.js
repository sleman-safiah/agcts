import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { styled } from "@mui/material/styles";
import { Grid, Paper } from "@mui/material";
import {
  Psychology,
  Shield,
  Ballot,
  Work,
  Architecture,
  ManageAccounts,
} from "@mui/icons-material";

const CardIcon = {
  0: <Psychology fontSize="large" />,
  1: <Shield fontSize="large" />,
  2: <Ballot fontSize="large" />,
  3: <Work fontSize="large" />,
  4: <Architecture fontSize="large" />,
  5: <ManageAccounts fontSize="large" />,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: "200px",
}));

let services = [
  {
    title: "1. Awareness & Training",
    content:
      "To keep educating and uphold awareness among employees about cybersecurity knowledge for current decision making",
  },
  {
    title: "2. Risk Assessment",
    content:
      "To identify the existing security risks in a prioritized order based on system vulnerabilities and incident impact level",
  },
  {
    title: "3. Policies & Procedures",
    content:
      "to define the most particular policies and procedures for avoiding any gap between three main pilars-people, processes, and applied technology at the site",
  },
  {
    title: "4. Business Case Development",
    content:
      "To create the investment business case and build a security roadmap plan for the mid to long term considering the budget and achievable goals",
  },
  {
    title: "5. Design & Implementation Phase",
    content:
      "To implement defense-in-depth security countermeasures for keeping the operation availability at the highest level",
  },
  {
    title: "6. Managed Service Phase",
    content:
      "To implement enterprise-wide security managed services for timely monitoring, protection, and response at the first view",
  },
];

export default function SecurityProgramService() {
  const mediaQuery = window.matchMedia("(max-width: 680px)");
  let x = mediaQuery.matches ? 12 : 4;
  return (
    <Grid
      sx={{
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "1em",
      }}
      container
      spacing={mediaQuery.matches ? 0 : 8}
      columnSpacing={mediaQuery.matches ? 0 : 11}
      rowGap={4}
    >
      <Grid container columnSpacing={4} rowGap={4}>
        <GridItem
          title={services[0].title}
          content={services[0].content}
          idx={0}
        />
        <GridItem
          title={services[1].title}
          content={services[1].content}
          idx={1}
        />
        <GridItem
          title={services[2].title}
          content={services[2].content}
          idx={2}
        />
      </Grid>
      <Grid container columnSpacing={4} rowGap={4}>
        <GridItem
          title={services[3].title}
          content={services[3].content}
          idx={3}
        />
        <GridItem
          title={services[4].title}
          content={services[4].content}
          idx={4}
        />
        <GridItem
          title={services[5].title}
          content={services[5].content}
          idx={5}
        />
      </Grid>
    </Grid>
  );
}

const style = {
  title: {
    fontSize: "1.1rem",
    marginTop: "0.5em",
    color: "#303030",
  },
  content: {
    width: "90%",
    marginTop: "1em",
  },
};

function GridItem({ title, content, idx }) {
  const mediaQuery = window.matchMedia("(max-width: 680px)");
  let x = mediaQuery.matches ? 12 : 4;
  return (
    <Grid item style={{ width: "33%" }} xs={x} columnGap={4}>
      <Item>
        <div style={{ marginLeft: "1em" }}>
          {CardIcon[idx]}
          <div style={style.title}>{title}</div>
          <div style={style.content}>{content}</div>
        </div>
      </Item>
    </Grid>
  );
}

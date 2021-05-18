import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

import GithubActivity from "./GithubActivity";
import LogbookEntry from "./LogbookEntry";

import { typoH1Props, typoTextProps } from "../../../utils/typoProps";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginBottom: "20px",
    },
  })
);

interface MyProps {
  openSidePanel: Function;
  openPage: Function;
}

const AboutMe: React.FunctionComponent<MyProps> = ({
  openSidePanel,
  openPage,
}) => {
  const classes = useStyles();

  const nbXp = new Date().getFullYear() - 2007;

  return (
    <Container maxWidth="lg">
      <Typography {...typoH1Props}>About Me</Typography>
      <Divider className={classes.divider} />
      <Typography {...typoTextProps}>
        Developer since approximatively <b>{nbXp} years</b>, I started to
        develop on backend side and after <b>8 years to work with Java</b>, I
        decide to change to work more on frontend activities. <br />
      </Typography>
      <Typography {...typoTextProps}>
        <b>Since 2015</b>, I'm working on different frontend projects (firstly
        with <b>Angular</b> and after with <b>ReactJS</b> as framework).
      </Typography>
      <Typography {...typoTextProps}>
        I'm currently <b>Principal Frontend Engineer</b> at Talend where I have
        the opportunity to continue to increase my skills and to share my
        knowledges with others.
      </Typography>
      <Box textAlign="center" m={1}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PlayCircleOutlineIcon fontSize="large" />}
          onClick={() => openSidePanel(true)}
        >
          Display Menu
        </Button>
      </Box>
      <Divider className={classes.divider} />
      <Grid container spacing={5}>
        <Grid key="logbook" item sm={12} md={6} lg={6}>
          <LogbookEntry />
        </Grid>
        <Grid key="github" item sm={12} md={6} lg={6}>
          <GithubActivity />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutMe;

import React from "react";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

import { typoH1Props } from "utils/typoProps";
import LogbookComponent from "components/Logbook";

const LogbookEntry: React.FunctionComponent = () => {
  return (
    <Box>
      <Typography {...typoH1Props}>Last logbook entry</Typography>
      <LogbookComponent onlyLast={true} />
      <Typography align="right">
        <Link to="/logbook">See more -&gt;</Link>
      </Typography>
    </Box>
  );
};

export default LogbookEntry;

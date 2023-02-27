import React, { useContext } from 'react';
import { Box, makeStyles, useTheme } from '@material-ui/core';
import tokens, { ColorModeContext } from '../../theme';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2',
  },
});

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box className={classes.box} />
  );
}

export default Topbar;

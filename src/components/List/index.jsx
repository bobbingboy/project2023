import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

});

export default function List() {
  const classes = useStyles();
  return (
    <Box className={classes.box} />
  );
}

/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react';
import {
  Box, IconButton, InputBase, makeStyles, useTheme,
} from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { tokens, ColorModeContext } from '../../theme';

const useStyles = makeStyles({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2',
  },
  leftCellBox: {
    display: 'flex',
    borderRadius: '3px',
  },
  rightCellBox: {
    display: 'flex',
  },
});

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { toggleColorMode } = useContext(ColorModeContext);
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box className={classes.leftCellBox} background={colors.primary[400]}>
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box className={classes.rightCellBox}>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === 'dark' ? <Brightness2OutlinedIcon /> : <Brightness5OutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AccountCircleOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Topbar;

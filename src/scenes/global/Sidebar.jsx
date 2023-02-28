import React from 'react';
import {
  makeStyles, useTheme, Box, MenuItem, Menu, Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useProSidebar, ProSidebar } from 'react-pro-sidebar';
import { MenuOutlined } from '@material-ui/icons';
import { tokens } from '../../theme';

const useStyles = makeStyles({
  sidebarBox: {
    '& .pro-icon-wrapper': {
      backgroundColor: 'transparent !important',
    },
    '& .pro-inner-item': {
      padding: '5px 35px 5px 20px !important',
    },
    '& .pro-inner-item:hover': {
      padding: '#868dfb !important',
    },
    '& .pro-menu-item.active': {
      color: '#6870fa !important',
    },
  },
});

const userProfile = {
  authority: 'ADMIN',
  username: 'bobbingboy',
  title: 'ahahahahahahah',

};

function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const {
    collapseSidebar, collapsed, toggleSidebar, toggled, broken, rtl,
  } = useProSidebar();
  // const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  return (
    <Box className={classes.sidebarBox} style={{ '& .pro-sidebar-inner': { background: `${colors.primary[400]} !important` } }}>
      <ProSidebar collapsed={collapsed}>
        <Menu>
          <MenuItem
            onClick={() => collapseSidebar()}
            icon={collapsed ? <MenuOutlined /> : undefined}
          >
            {collapsed && (
              <Box>
                <Typography>{userProfile.authority}</Typography>
              </Box>
            )}
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
}

export default Sidebar;

import { Box, useTheme } from "@material-ui/core";
import { useContext } from "react";
import tokens from "../../theme";
import { ColorModeContext } from './../../theme';

const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);


    return <Box display="flex" justifyContent="space-between" p={2}>

    </Box>;
};

export default Topbar;
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    box: {
    }
});


export default function List (props) {
    const classes = useStyles();


    return (
        <Box className={classes.box}></Box>
    )
}
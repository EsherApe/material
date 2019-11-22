import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
}));

const NavigationTitle = () => {
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant="h6" noWrap>
            Chubarova Natalia
        </Typography>
    )
};

export default NavigationTitle;
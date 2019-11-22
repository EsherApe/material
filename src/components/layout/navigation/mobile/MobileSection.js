import {IconButton, makeStyles} from "@material-ui/core";
import {More as MoreIcon} from "@material-ui/icons";
import React from "react";

const MobileSection = ({mobileMenuId, handleMobileMenuOpen}) => {
    const useStyles = makeStyles(theme => ({
        mobileSection: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.mobileSection}>
            <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
            >
                <MoreIcon/>
            </IconButton>
        </div>
    )
};

export default MobileSection;
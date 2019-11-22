import {Badge, IconButton, makeStyles} from "@material-ui/core";
import {AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon} from "@material-ui/icons";
import React from "react";
import {fade} from "@material-ui/core/styles";

const DesktopSection = ({menuId, handleProfileMenuOpen}) => {

    const useStyles = makeStyles(theme => ({
        desktopSection: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        }
    }));

    const classes = useStyles();

    return (
        <div className={classes.desktopSection}>
            <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon/>
                </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon/>
                </Badge>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
        </div>
    )
};

export default DesktopSection;
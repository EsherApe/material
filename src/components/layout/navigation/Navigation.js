import React from 'react';
import {AppBar, Toolbar, IconButton, makeStyles} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import DesktopSection from "./desktop/DesktopSection";
import MobileSection from "./mobile/MobileSection";
import Search from "./Search";
import NavigationTitle from "./NavigationTitle";
import MobileMenu from "./mobile/MobileMenu";
import DesktopMenu from "./desktop/DesktopMenu";

const Navigation = () => {
    const useStyles = makeStyles(theme => ({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }));

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = event => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <NavigationTitle/>
                    <Search/>
                    <div className={classes.grow}/>
                    <DesktopSection menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen}/>
                    <MobileSection mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen}/>
                </Toolbar>
            </AppBar>
            <MobileMenu mobileMoreAnchorEl={mobileMoreAnchorEl}
                        mobileMenuId={mobileMenuId}
                        isMobileMenuOpen={isMobileMenuOpen}
                        handleMobileMenuClose={handleMobileMenuClose}
                        handleProfileMenuOpen={handleProfileMenuOpen}
            />
            <DesktopMenu anchorEl={anchorEl}
                         menuId={menuId}
                         isMenuOpen={isMenuOpen}
                         handleMenuClose={handleMenuClose}
            />
        </div>
    );
}

export default Navigation;
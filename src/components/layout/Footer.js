import React from 'react';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
    return (
        <footer className="footer">
            <Typography variant="body2" color="textSecondary" align="center">
                {'All rights reserved © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    );
};

export default Footer;
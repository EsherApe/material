import React from "react";
import Navigation from "./navigation/Navigation";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Navigation/>
            </div>
        </header>
    )
};

export default Header;
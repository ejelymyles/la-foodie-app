import React from "react";
import NavBar from "./NavBar";

function Header(){
    return (
        <div className="header">
            <h1 className="header-title">LA Food Finder</h1>
            <h4 className="header-subtitle">Use this app to find a place to eat!</h4>
            <NavBar />
        </div>
    );
}

export default Header;
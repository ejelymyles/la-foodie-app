import React from "react";
import NavBar from "./NavBar";

function Header(){
    return (
        <div>
            <h1>LA Food Finder</h1>
            <h4>Use this app to find a place to eat!</h4>
            <NavBar />
        </div>
    );
}

export default Header;
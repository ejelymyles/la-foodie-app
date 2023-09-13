import React from "react";
import NavBar from "./NavBar";

function Header(){
    return (
        <div>
            <h1>LA Food Finder</h1>
            <h2>Use this app to find a place to eat!</h2>
            <NavBar />
        </div>
    );
}

export default Header;
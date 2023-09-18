import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink exact to ="/" className="nav-link">Home</NavLink>
            <NavLink to="/restaurants" className="nav-link">Restaurants</NavLink>
            <NavLink to="/add" className="nav-link">Add New Restaurant</NavLink>
        </div>
    )
}

export default NavBar;
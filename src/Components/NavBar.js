import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <NavLink exact to ="/">Home</NavLink>
            <NavLink to="/restaurants">Restaurants</NavLink>
            <NavLink to="/add">Add New Restaurant</NavLink>
        </div>
    )
}

export default NavBar;
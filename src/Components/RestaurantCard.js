import React from "react";

function RestaurantCard({ restaurant }){

    const{id, name, cuisine, price, location} = restaurant

    return(
        <div>
            <li className="card">
                <h2>{name}</h2>
                <p>{cuisine}</p>
                <p>Price Range: {price}</p>
                <p>{location}</p>
            </li>
        </div>
    )
}

export default RestaurantCard;
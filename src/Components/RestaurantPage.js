import React from "react";

function RestaurantPage({ restaurants }){
    return(
        <div>
            <h1>Restaurant List </h1>
            <ul>
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>{restaurant.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantPage;
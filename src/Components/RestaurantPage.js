import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantPage({ restaurants }){
    return(
        <div>
            <h1>Restaurant List </h1>
            <ul className="cards card-container">{restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant}/>)}</ul>
        </div>
    );
}

export default RestaurantPage;

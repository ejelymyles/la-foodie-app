import React, { useState } from "react";

function RestaurantForm(){

    const [addNewForm, setAddNewForm] = useState({
        name: "",
        cuisine: "",
        price: "",
        location: "",
    });
    
    return(
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Cuisine</label>
                    <input type="text" name="cuisine" />
                </div>
                <div>
                    <label>Price</label>
                    <select name="price">
                        <option value=""></option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                </div>
                <div>
                    <label>Location</label>
                    <select name="location">
                    <option value=""></option>
                        <option value="downtown">Downtown</option>
                        <option value="west la">West LA</option>
                        <option value="east la">East LA</option>
                        <option value="north la">North LA</option>
                        <option value="south la">South LA</option>
                        <option value="central la">Central LA</option>
                    </select>
                </div>
                <button type="submit">Add Restaurant</button>
            </form>
        </div>
    )
}

export default RestaurantForm;
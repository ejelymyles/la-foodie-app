import React, { useState } from "react";

function RestaurantForm({ newResy }){

    const [addNewForm, setAddNewForm] = useState({
        name: "",
        cuisine: "",
        price: "",
        location: "",
    });

    function handleChange(e){
        setAddNewForm({
            ...addNewForm,
            [e.target.name]: e.target.value,
        })
    }


    function handleAddNewForm (e){
        e.preventDefault();
        fetch("http://localhost:3000/restaurants", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": addNewForm.name,
                "cuisine": addNewForm.cuisine,
                "price": addNewForm.price,
                "location": addNewForm.location,
            })
        })
        .then((r) => r.json())
        .then((newPlace) => newResy(newPlace));

        setAddNewForm({
            name: "",
            cuisine: "",
            price: "",
            location: "",
        })
    }


    return(
        <div>
            <form className="add-new-form" onSubmit={handleAddNewForm}>
                <div>
                    <label className="add-new-label">Name</label>
                    <input type="text" name="name" className="form-input2" value={addNewForm.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="add-new-label">Cuisine</label>
                    <input type="text" name="cuisine" className="form-input2" value={addNewForm.cuisine} onChange={handleChange}/>
                </div>
                <div>
                    <label className="add-new-label">Price</label>
                    <select name="price" className="form-input2" value={addNewForm.price} onChange={handleChange}>
                        <option value=""></option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                        <option value="$$$$">$$$$</option>
                    </select>
                </div>
                <div>
                    <label className="add-new-label">Location</label>
                    <select name="location" className="form-input2" value={addNewForm.location} onChange={handleChange}>
                    <option value=""></option>
                        <option value="downtown">Downtown</option>
                        <option value="west la">West LA</option>
                        <option value="east la">East LA</option>
                        <option value="north la">North LA</option>
                        <option value="south la">South LA</option>
                        <option value="central la">Central LA</option>
                    </select>
                </div>
                <button type="submit" className="btn2">Add Restaurant</button>
            </form>
        </div>
    )
}

export default RestaurantForm;
import React, { useState }from "react";
import RestaurantCard from "./RestaurantCard";


function Filter({ restaurants }){
    const[formData, setFormData] = useState({
        cuisine: "",
        location: "",
        price: "",
    });

    const[cuisine, setCuisine] = useState("All");
    const[location, setLocation] = useState("All");
    const[price, setPrice] = useState("All");
    

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const submittedData = restaurants.filter((restaurant) => {
        return(
            (cuisine === "" || restaurant.cuisine === cuisine) &&
            (location === "" || restaurant.location === location) &&
            (price === "" || restaurant.price === price) 
        )});

   
        function handleSubmit(e){
        e.preventDefault();
        setCuisine(formData.cuisine);
        setLocation(formData.location);
        setPrice(formData.price);
        
        setFormData({
                cuisine: "",
                location: "",
                price: "",
            })}

    return (
        <div>
            <h2 className="search-here">Search For A Reastaurant Here</h2>
        <form onSubmit={handleSubmit} className="search-form">
          <label className="label">
            Cuisine:
            <select name="cuisine" className="form-input1" value={formData.cuisine} onChange={handleChange}>
              <option value=""></option>
              <option value="American">American</option>
              <option value="BBQ">BBQ</option>
              <option value="Chinese">Chinese</option>
              <option value="Ethiopian">Ethiopian</option>
              <option value="Filipino">Filipino</option>
              <option value="French">French</option>
              <option value="Hawaiian">Hawaiian</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Japanese">Japanese</option>
              <option value="Korean">Korean</option>
              <option value="Latin">Latin</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Mexican">Mexican</option>
              <option value="Middle Eastern">Middle Eastern</option>
              <option value="Seafood">Seafood</option>
              <option value="Soul Food">Soul Food</option>
              <option value="Spanish">Spanish</option>
              <option value="Steakhouse">Steakhouse</option>
              <option value="Thai">Thai</option>
            </select>
          </label>
          <label className="label">
            Location:
            <select name="location" className="form-input1" value={formData.location} onChange={handleChange}>
              <option value=""></option>
              <option value="Downtown">Downtown</option>
              <option value="Central LA">Central LA</option>
              <option value="West LA">West LA</option>
              <option value="East LA">East LA</option>
              <option value="South LA">South LA</option>
              <option value="North LA">North LA</option>
            </select>
          </label>
          <label className="label">
            Price:
            <select name="price" className="form-input1" value={formData.price} onChange={handleChange}>
              <option value=""></option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </label>
          <button type="submit" className="btn1">Search</button>
        </form>
        
        <div className="cards card-container">
            {submittedData.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}
        </div>
      </div>
    );
}

export default Filter;
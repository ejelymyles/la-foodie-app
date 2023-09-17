import React, { useState }from "react";
import RestaurantCard from "./RestaurantCard";


function Filter({ restaurants }){
    const[formData, setFormData] = useState({
        cuisine: "",
        location: "",
        price: "",
    });

    const[filteredData, setFilteredData] = useState([]);

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        console.log(formData)
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:3000/restaurants")
        .then((resp) => resp.json())
        .then((data) => {
            const submittedData = restaurants.filter((restaurant) => {
                return(
                    (formData.cuisine === "" || formData.cuisine === restaurant.cuisine) &&
                    (formData.location === "" || formData.location === restaurant.location) &&
                    (formData.price === "" || formData.price === restaurant.price) 
                );
            });
            setFilteredData(submittedData)

            setFormData({
                cuisine: "",
                location: "",
                price: "",
            })
        })
    }
    

    return (
        <div>
            <h1>Find A Reastaurant Here</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Cuisine:
            <select name="cuisine" value={formData.cuisine} onChange={handleChange}>
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
          <label>
            Location:
            <select name="location" value={formData.location} onChange={handleChange}>
              <option value=""></option>
              <option value="Downtown">Downtown</option>
              <option value="Central LA">Central LA</option>
              <option value="West LA">West LA</option>
              <option value="East LA">East LA</option>
              <option value="South LA">South LA</option>
              <option value="North LA">North LA</option>
            </select>
          </label>
          <label>
            Price:
            <select name="price" value={formData.price} onChange={handleChange}>
              <option value=""></option>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </form>
        
        <div>
            {filteredData.map((restaurant) => (<RestaurantCard key={restaurant.id} restaurant={restaurant} />))}
        </div>
      </div>
    );
}

export default Filter;
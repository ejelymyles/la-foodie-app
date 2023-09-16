import React, { useState }from "react";
import RestaurantCard from "./RestaurantCard";


function Filter(){
    const[formData, setFormData] = useState({
        cuisine: "",
        location: "",
        price: "",
    });

    const[filteredData, setFilteredData] = useState([]);

    function handleChange(e){
        const {name, value} =e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
        console.log(formData)
    }

    

    return (
        <div>
            <h1>Find A Reastaurant Here</h1>
        <form>
          <label>
            Cuisine:
            <select name="cuisine" value={formData.cuisine} onChange={handleChange}>
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
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
}

export default Filter;
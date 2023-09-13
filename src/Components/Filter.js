import React from "react";

function Filter(){
    return (
        <div>
        <form>
          <label>
            Cuisine:
            <select>
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
          <br />
          <label>
            Location:
            <select>
              <option value="Downtown">Downtown</option>
              <option value="Central LA">Central LA</option>
              <option value="West LA">West LA</option>
              <option value="East LA">East LA</option>
              <option value="South LA">South LA</option>
              <option value="North LA">North LA</option>
            </select>
          </label>
          <br />
          <label>
            Price:
            <select>
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
              <option value="$$$$">$$$$</option>
            </select>
          </label>
          <br />
          <button type="submit">Search</button>
        </form>
      </div>
    );
}

export default Filter;
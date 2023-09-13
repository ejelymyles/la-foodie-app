import React from "react";

function Filter(){
    return (
        <div>
        <form>
          <label>
            Cuisine:
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <br />
          <label>
            Location:
            <select>
              <option value="Downtown">Option 1</option>
              <option value="">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </label>
          <br />
          <label>
            Price:
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              {/* Add more price options as needed */}
            </select>
          </label>
          <br />
          <button type="submit">Apply Filters</button>
        </form>
      </div>
    );
}

export default Filter;
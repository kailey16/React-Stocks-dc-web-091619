import React from 'react';  

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" name="A" checked={null} onChange={props.radioChecked}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" name="P" checked={null} onChange={props.radioChecked}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

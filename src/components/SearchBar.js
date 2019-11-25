import React from 'react';  

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" name="A" onChange={props.checkboxChecked} className="aSort" />
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" name="P" onChange={props.checkboxChecked} className="pSort" />
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.changeFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;

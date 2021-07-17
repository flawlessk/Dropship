import React from "react";
import "./Sort.css";

const Sort = () => {
  return (
    <div className="content__sort">
      <label htmlFor="sort">Sort By:</label>
      <select
        name="items"
        id="sort"
      >
        <option value="new">New Arrivals </option>
        <option value="HTL">Price: High To Low</option>
        <option value="LTH">Price: Low To High</option>
        <option value="AZ">Profit: Alphabetic</option>
        <option value="ZA">Profit: Non-Alphabetic</option>
      </select>
    </div>
  );
};

export default Sort;
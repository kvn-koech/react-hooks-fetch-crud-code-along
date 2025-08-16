import React from "react";

function Filter({ category, onCategoryChange, categories }) {
  // Default categories if none provided
  const availableCategories = categories || [
    "All",
    "Produce",
    "Dairy",
    "Dessert",
    "Bakery",
    "Meat"
  ];

  return (
    <div className="Filter">
      <label htmlFor="category-filter" className="filter-label">
        Filter by:
      </label>
      <select
        id="category-filter"
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="filter-select"
        aria-label="Filter items by category"
      >
        {availableCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat === "All" ? "All Categories" : cat}
          </option>
        ))}
      </select>
      {category !== "All" && (
        <button
          className="clear-filter"
          onClick={() => onCategoryChange("All")}
          aria-label="Clear filter"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default Filter;
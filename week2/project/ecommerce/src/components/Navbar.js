import React from "react";

const Navbar = ({ selectCategory, selectedCategory, categoryList }) => {
  return (
    <div className="navbar">
      <ul>
        {categoryList.map(category =>
          <li key={category} className={selectedCategory === category && 'selectedCategory'}
            onClick={() => selectCategory(category)}>
            {category.slice(6).toUpperCase()}
          </li>)}
      </ul>
    </div>
  )
};

export default Navbar;



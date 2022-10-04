import React from "react";

const Navbar = ({ clickHandler, selectedCategory, categoryList }) => {

  return (
    <div className="navbar">
      <ul>
        {categoryList.map(category =>
          <li key={category} className={selectedCategory === category ? 'selectedCategory' : null}
            onClick={() => clickHandler(category)}>
            {category.toUpperCase()}
          </li>)}
  
      </ul>
    </div>
  )
};

export default Navbar;

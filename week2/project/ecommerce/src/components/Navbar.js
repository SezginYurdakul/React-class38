import React from "react";

const Navbar = ({ selectCategory, selectedCategory, categoryList }) => {
  //let newCategoryList = categoryList.map(category => category.slice(6).toUpperCase());
  return (
    <div className="Navbar">
      <ul>
        {categoryList.map(category =>
          <li key={category} className={selectedCategory === category ? "selectedCategory" : null}
            onClick={() => selectCategory(category)}>
            {category.slice(6).toUpperCase()}
          </li>)}
      </ul>
    </div>
  )
};

export default Navbar;



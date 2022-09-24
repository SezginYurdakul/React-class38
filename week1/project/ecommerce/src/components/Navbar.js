import React from "react";

const Navbar = ({ selectCategory, selectedCategory, categoryList }) => {
  //let newCategoryList = categoryList.map(category => category.slice(6).toUpperCase());
  return (
    <div className="navbar">
      <ul>
        {categoryList.map(category =>
          <li key={category} className={selectedCategory === category && 'selectedCategory'}
            onClick={() => selectCategory(category)}>
            {category.replace('FAKE: ', "").toUpperCase()}
          </li>)}
      </ul>
    </div>
  )
};

export default Navbar;



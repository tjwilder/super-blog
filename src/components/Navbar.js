import React from 'react';
import NavbarItem from '../containers/NavbarItem.js';
import '../css/Navbar.css';

const Navbar = ({items}) => {
  return (
    <div className="Navbar">
      <div className="Navbar-table">
        {items && items.map((item) => (
          <NavbarItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
};


export default Navbar;

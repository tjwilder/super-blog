import React from 'react';
import NavbarItem from './NavbarItem.js';
import Dropdown from './Dropdown.js';
import '../css/Navbar.css';

const Navbar = ({items}) => (
    <div className="Navbar">
        <div className="Navbar-table">
            <NavbarItem title="Onee">
                <Dropdown items={['one', 'two']} active={true} />
            </NavbarItem>
            <NavbarItem title="TWoople">
            </NavbarItem>
            <NavbarItem title="Za Sird Best Guy Ever lol">
            </NavbarItem>
        </div>
    </div>
);


export default Navbar;

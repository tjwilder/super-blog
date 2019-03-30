import React from 'react';
import Dropdown from './Dropdown';
import { default as ToggleableItem } from '../containers/NavbarItem'
import '../css/NavbarItem.css';

/**
 * Render a single item from the Navbar
 * A Navbar with sub-items will render
 * them as a dropdown of other NavbarItems when active.
 **/
const NavbarItem = ({id, action, active, items, title, toggleDropdown}) => {
  if (!action) {
    action = () => toggleDropdown(id)
  }
  // Make sure the onClick is on the title,
  // otherwise it will trigger when you click the dropdown
  return (
    <div className="NavbarItem">
      <div className="NavbarItem-title" onClick={action}>
        {title}
      </div>
      <Dropdown active={active}>
        {items && items.map((item) => (
          <ToggleableItem key={item.id} {...item} />
        ))}
      </Dropdown>
    </div>
  );
};

export default NavbarItem;

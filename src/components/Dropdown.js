import React from 'react';
import '../css/Dropdown.css';

const Dropdown = ({active, children}) => (
  <div className="Dropdown">
    {active &&
        <ul className="Dropdown-list">
          {children && children.map((item, i) => (
            <li key={i}>
              {item}
            </li>
          ))}
        </ul>
    }
  </div>
);

export default Dropdown;

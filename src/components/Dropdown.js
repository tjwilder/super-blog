import React, { Component } from 'react';
import '../css/Dropdown.css';

const Dropdown = (props) => {
	const {items, active} = props;
	return (
		<div className="Dropdown">
			{active && 
				<ul className="Dropdown-list">
					{items.map((item) => {
						return <li>
							item
						</li>
					})}
				</ul>
			}
		</div>
	);
}

export default Dropdown;

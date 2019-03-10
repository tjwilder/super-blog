import React from 'react';
import '../css/NavbarItem.css';

const NavbarItem = (props) => {
	const {title, children} = props; 
	return (
		<div className="NavbarItem">
			<div className="NavbarItem-title">
				{title}
			</div>
			{children}
		</div>
	);
}

export default NavbarItem;

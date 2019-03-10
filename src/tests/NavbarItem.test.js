import React from 'react';
import ReactDOM from 'react-dom';
import NavbarItem from './NavbarItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavbarItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

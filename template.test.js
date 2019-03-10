import React from 'react';
import ReactDOM from 'react-dom';
import {{TEMPLATE}} from '../css/{{TEMPLATE}}';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{TEMPLATE}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

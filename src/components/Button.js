import React from 'react';

const Button = ({text, action, ...args}) => (
    <button onClick={() => action(args)}>{text || 'Hello'}</button>
)

export default Button;

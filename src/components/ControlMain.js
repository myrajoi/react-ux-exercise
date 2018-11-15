import React from 'react';

const ControlMain = ({ control }) => (
  <div style={{ marginLeft: '250px' }}>
    <h1>{control.name}</h1>
    <h2>{control.state && control.state.isImplemented ? 'Implemented' : 'Not Implemented'}</h2>
    <p>{control.text}</p>
  </div>
)

export default ControlMain;
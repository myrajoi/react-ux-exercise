import React from 'react'
import { Link } from 'react-router-dom'

const ControlList = ({ controls }) => (
  <ul style={{ width: '200px', float: 'left' }}>
    { controls.map((c) => (
      <li key={c.id}>
        <Link to={`/controls/${c.id}`}>{c.name} - {c.text}</Link>
      </li>
    ))}
  </ul>
)

export default ControlList;
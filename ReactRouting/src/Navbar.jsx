import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/setting">Setting</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import './navbar.css'

const Navbar = ({theme, setTheme}) => {
    const toggle_mode = () => {

        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

  return (
    <div className='navbar'>
      <h1>Logo</h1>
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      
      <div className='toggle-icon'>
        <FontAwesomeIcon icon={theme == 'light'? faMoon : faSun} onClick={() => {toggle_mode()}}/>
      </div>

    </div>
  )
}

export default Navbar

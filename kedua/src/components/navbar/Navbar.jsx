import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({theme, setTheme}) => {

const toggle_mode = () => {
  if (theme == 'light') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
}

  return (
    <div>
      <div className='navbar'>
        <h1>LOGO</h1>

        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Support</li>
        </ul>

        <div className='toggle-icon'>
          <FontAwesomeIcon icon = {theme == 'light' ? faMoon : faSun} onClick={() => toggle_mode()}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar



import React from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () =>{
        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
  return (
    <div className='navbar'>
        <h1 className='logo'>LOGO</h1>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Features</li>
            <li>About</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search...'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' color='#fff'/> {/* search icon*/}
        </div>
        <FontAwesomeIcon icon={theme == 'light' ? faMoon : faSun} className='toggle-icon' onClick={()=> {toggle_mode()}}/>

    </div>
  )
}

export default Navbar

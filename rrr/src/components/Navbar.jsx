import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import { useState } from 'react';
import Sidebar from './sidebar'


function Navbar() {
    const [isClicked, setClicked] = useState(false);

    function click() {
        if (isClicked) {
            setClicked(false);
        } else {
            setClicked(true);
        }
    }

    return (
        <div>
            <div className='navbar'>
                <FontAwesomeIcon icon={isClicked ? faXmark : faBars} onClick={click}></FontAwesomeIcon>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </div>
            <Sidebar isClicked={isClicked}/>
            
        </div>
    );
}


export default Navbar

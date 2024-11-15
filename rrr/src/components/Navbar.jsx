import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import "./navbar.css"
import { useState, useEffect } from 'react';
import Sidebar from './sidebar'


function Navbar() {
    const [isClicked, setClicked] = useState(() => {
        const savedState = localStorage.getItem('isClicked');
        return savedState === 'true';
    });

    useEffect(() => {
        localStorage.setItem('isClicked', isClicked);
    }, [isClicked]);

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
                <FontAwesomeIcon icon={isClicked ? faXmark : faBars} onClick={click} className='icon-menu'></FontAwesomeIcon>
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
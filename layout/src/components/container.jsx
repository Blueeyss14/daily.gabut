import React from 'react'
import './container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function Container() {

    const [isTapped, setIsTapped] = useState(false);

    function tapBar() {
        if (isTapped === false) {
            setIsTapped(true);
          } else {
            setIsTapped(false);
          }
    }

  return (
    <div className='all-body'>
        <div className='nav'>
            <FontAwesomeIcon icon={isTapped ? faXmark : faBars} onClick={tapBar}/>
            <ul>
                <li>--1</li>
                <li>--2</li>
                <li>--3</li>
            </ul>
        </div>
        <div className={isTapped ? 'con-body tapped' : 'con-body'}>

        </div>
    </div>
  )
}

export default Container

import React from 'react'
import "./Sidebar.css"

function Sidebar({isClicked}) {
  return (
    <div className={isClicked ? 'sideBar clicked' : 'sideBar'}>
      
    </div>
  )
}

export default Sidebar

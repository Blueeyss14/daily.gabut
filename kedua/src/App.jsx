import React from 'react'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.getItem('current_theme', theme)
  }, [theme]);
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App

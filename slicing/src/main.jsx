import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// document.body.style.backgroundColor = getComputedStyle(document.documentElement)
//   .getPropertyValue('--color-blue-950');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

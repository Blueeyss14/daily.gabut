import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = () => {
    const navigate = useNavigate()

    return (
        <div className='w-20 h-10 bg-blue-400 fixed bottom-0 left-1/2 transform -translate-x-1/2 justify-center align-middle mb-20 rounded-8px overflow-hidden flex'>
            <div className='bg-green-400 h-full flex-1' onClick={() => navigate('/pages/Page1.jsx')}></div>
            <div className='bg-red-400 h-full flex-1' onClick={() => navigate('/pages/Page2.jsx')}></div>
        </div>
    )
}

export default Button

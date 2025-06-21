import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewPage from './NewPage'

const RightPages = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className='bg-green-400 h-screen w-1 flex-1 flex-col'>
          <div className='flex-1 flex justify-between'>
            <div className='rounded-3xl h-10 w-[25rem] flex items-center justify-end bg-white px-5'>
              <h2>Search</h2>
            </div>
            <div className='bg-amber-50 h-10 w-10 rounded-full'></div>
          </div>
          <div className='flex-1 bg-amber-300 h-50 m-10 rounded-[30px]'></div>
        </div>
      } />
      <Route path="/new" element={<NewPage />} />
    </Routes>
  )
}

export default RightPages

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  const text = Array(9).fill({ textName: 'Test' })

  return (
    <div className='bg-red-400 h-[90vh] w-3xs rounded-2xl mx-10 flex flex-col'>
      <div className='bg-purple-400 h-[130px] m-15 rounded-2xl'></div>
      {text.map((e, i) => (
        <div
          key={i}
          className='flex-1 mb-5 ml-15 cursor-pointer'
          onClick={() => i === 0 && navigate('/new')}
        >
          {e.textName}
        </div>
      ))}
    </div>
  )
}

export default Sidebar

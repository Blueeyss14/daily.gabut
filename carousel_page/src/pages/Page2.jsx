import React from 'react'

const Page2 = () => {
  const headings = Array(100).fill(null);
  return (
    <div className='bg-green-400 w-screen h-screen overflow-auto'>
            {headings.map((_, index) => (
        <h1 key={index}>Omke Gas</h1>
      ))}
    </div>
  )
}

export default Page2

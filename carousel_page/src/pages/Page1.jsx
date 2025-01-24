import React from 'react'

const Page1 = () => {

  const headings = [];
  for (let i = 0; i < 100; i++) {
    headings.push(
      <h1 key={i}>This is Content</h1>
    );
  }
  return (
    <div className='bg-blue-400 w-screen h-screen flex-shrink-0 overflow-auto'>
           {headings}
    </div>
  )
}

export default Page1

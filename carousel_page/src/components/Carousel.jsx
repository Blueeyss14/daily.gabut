import React from 'react'

const clicked = [
  <button key="button1">Click1</button>,
  <button key="button2">Click2</button>,
];

const Carousel = ({ children: pages }) => {

  const scrollToIndex = (index) => {
    const target = document.querySelectorAll('.page')[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className='w-full h-screen'>
      <div className='fixed w-screen h-10 bg-purple-400 justify-evenly flex items-center'>
        {clicked.map((clik, index) => (
          <div key={index} onClick={()=> scrollToIndex(index)}>{clik}</div>
        ))}
      </div>
      <div className='flex snap-x snap-mandatory overflow-hidden'>
        {pages.map((page, index) => (
          <div key={index} className="page">{page}</div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

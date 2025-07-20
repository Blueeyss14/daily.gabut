import Navbar from "../components/Navbar"


const HomePage = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
    <div className='flex-1 bg-homeBg flex items-center justify-center'>
        <div className='mr-20'>
            <h1 className='text-5xl font-bold text-gray-600 mb-5'>Lessons and insights</h1>
            <h1 className='text-5xl font-bold text-green-600 mb-5'>from 8 years</h1>
            <h1 className='text-gray-600'>Where to grow your business as a photographer: site or social media?</h1>
        </div>
        <img src="assets/illust.png" className='w-100 h-100' />
    </div>
    </div>

  )
}

export default HomePage

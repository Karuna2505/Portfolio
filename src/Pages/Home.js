import React from 'react'
import Button from '../Components/Button';
function Home() {
  return (
    <div id="home" className='h-auto pb-12'>
     <div className='flex flex-col-reverse  items-center mt-4 lg:flex-row lg:justify-evenly'>

     <div className='mt-12 lg:ml-14 text-[#254336]'>
     <h1 className='font-bold text-5xl md:text-6xl m-8'>Hello!,I'm</h1>
     <h1 className='font-bold text-5xl md:text-6xl m-8'>Karuna Kumari</h1>
     <h1 className='font-bold text-lg md:text-xl m-8'>A Creative Web Developer from New Delhi</h1>
     <Button title="HIRE ME"/>
     </div>
     
     <img src="/developer.png" alt="my-image" className=' mt-8 mr-6'/>
      
     </div>
     
    </div>
  )
}

export default Home

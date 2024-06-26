import React from 'react'
import image from "../Assets/image.jpg";
import Button from '../Components/Button';
function Home() {
  return (
    <div id="home" className='h-auto pb-12'>
     <div className='flex flex-col  items-center mt-4 md:flex-row md:justify-evenly'>

     <div className='mt-12 ml-12 text-[#254336]'>
     <h1 className='font-bold text-6xl m-8'>Hello!,I'm</h1>
     <h1 className='font-bold text-6xl m-8'>Karuna Kumari</h1>
     <h1 className='font-bold text-xl m-8'>A Creative Web Developer from New Delhi</h1>
     <Button title="HIRE ME"/>
     </div>
     
     <img src={image} alt="my-image" className='one w-[22rem] h-[25rem] mt-8 mr-6'/>
      
     </div>
     
    </div>
  )
}

export default Home

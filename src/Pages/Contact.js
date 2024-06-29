import React from 'react';
import ContactDiv from '../Components/contactdiv';
import blob from "../Assets/blob.svg";

function Contact() {
  return (
    <div id='contact' className='h-auto flex flex-col items-center'>
      <h1 className='font-bold text-5xl text-[#254336] m-14'>Get in touch</h1>
      <div className='h-[40rem] w-4/6 bg-[#6B8A7A] rounded-3xl flex items-center mb-28'>
        <div className='h-[36rem] w-2/5 bg-[#DAD3BE] ml-8 rounded-xl overflow-hidden border border-[#DAD3BE]'>
          <h1 className='text-3xl font-medium text-[#254336] m-8'>Contact Information</h1>
          <div className='flex flex-col justify-center'>
          <div className='flex m-8'>
          <img src="/call.png" alt="call icon" className='h-8 w-8 mr-2'/>
          <h1 className='text-xl font-medium text-[#254336]'>+91 7065832721</h1>
          </div>
          <div className='flex m-8'>
          <img src="/mail.png" alt="mail icon" className='h-8 w-8 mr-2'/>
          <h1 className='text-xl font-medium text-[#254336]'>karunamathur14@gmail.com</h1>
          </div>
          <div className='flex m-8'>
          <img src="/location.png" alt="location icon" className='h-8 w-8 mr-2'/>
          <h1 className='text-xl font-medium text-[#254336]'>New Delhi,India</h1>
          </div>
          </div>
          <img src={blob} alt="blob" className='ml-16'/>
        </div>
        <div className='m-16'>
        <ContactDiv title='Name'/>
        <ContactDiv title='Email'/>
      <div className='flex flex-col  items-start'>
      <label className='text-2xl text-[#DAD3BE] font-semibold'>Message</label>
      <textarea placeholder='Message' type='text'  maxLength={100} className='h-20 mt-6 mb-14 w-72 resize-none bg-inherit border-2 border-[#254336] placeholder:text-black'/>
      </div>
      <button className='px-6 py-3 bg-[#DAD3BE] font-bold text-lg text-[#254336] rounded-3xl hover:bg-[#254336] hover:text-[#DAD3BE]'>SEND</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact

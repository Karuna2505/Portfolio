import React,{useState} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send('service_omr6eh6', 'template_5pp4x4j', formData, 'ComhM_f-MKPYsLDWw')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return (
    <div id='contact' className='h-auto flex flex-col items-center'>
      <h1 className='font-bold text-5xl text-[#254336] m-14'>Contact Me</h1>
      <div className='h-auto w-5/6 bg-[#6B8A7A] rounded-3xl flex flex-col items-center mb-28 xl:flex xl:flex-row sm:w-4/6'>
        <div className='h-auto w-5/6  bg-[#DAD3BE] rounded-xl overflow-hidden border border-[#DAD3BE] m-8 xl:w-2/5'>
          <h1 className='text-3xl font-medium text-[#254336] m-8'>Contact Information</h1>
          <div className='flex flex-col justify-center'>
          <div className='flex m-4 sm:m-8'>
          <img src="/call.png" alt="call icon" className='h-5 w-5 sm:h-8 sm:w-8 mr-1 sm:mr-2'/>
          <h1 className='text-base sm:text-xl font-medium text-[#254336]'>+91 7065832721</h1>
          </div>
          <div className='flex m-4 sm:m-8'>
          <img src="/mail.png" alt="mail icon" className='h-5 w-5 sm:h-8 sm:w-8 mr-1 sm:mr-2'/>
          <h1 className='text-base sm:text-xl font-medium text-[#254336]'>karunamathur14@gmail.com</h1>
          </div>
          <div className='flex m-4 sm:m-8'>
          <img src="/location.png" alt="location icon" className='h-5 w-5 sm:h-8 sm:w-8 mr-1 sm:mr-2'/>
          <h1 className='text-base sm:text-xl font-medium text-[#254336] mb-44'>New Delhi,India</h1>
          </div>
          </div>
        </div>
        <form className='m-16 w-4/6 xl:w-2/6' onSubmit={handleSubmit}>
        <div className='flex flex-col items-start'>
      <label className='text-2xl text-[#DAD3BE] font-semibold'>Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="name" className='h-9 mt-4 mb-8 border-0 bg-inherit border-b-2 border-[#254336] text-black w-48 placeholder:text-[#00000099] sm:w-60'/>
    </div>
    <div className='flex flex-col items-start'>
      <label className='text-2xl text-[#DAD3BE] font-semibold'>Email</label>
      <input type="text" name="email" value={formData.email} onChange={handleChange} required placeholder="email" className='h-9 mt-4 mb-8 border-0 bg-inherit border-b-2 border-[#254336] text-black w-48 placeholder:text-[#00000099] sm:w-60'/>
    </div>
      <div className='flex flex-col  items-start'>
      <label className='text-2xl text-[#DAD3BE] font-semibold'>Message</label>
      <textarea name="message" value={formData.message} onChange={handleChange} required placeholder='Message' type='text'  maxLength={100} className='h-20 mt-6 mb-14 w-56 sm:w-72 resize-none bg-inherit border-2 border-[#254336] placeholder:text-[#00000099] p-2'/>
      </div>
      <button type='submit' className='px-6 py-3 bg-[#DAD3BE] font-bold text-lg text-[#254336] rounded-3xl hover:bg-[#254336] hover:text-[#DAD3BE]'>SEND</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact

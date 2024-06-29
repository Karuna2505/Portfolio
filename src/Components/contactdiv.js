import React from 'react'

function contactdiv({title}) {
  return (
    <div className='flex flex-col items-start'>
      <label className='text-2xl text-[#DAD3BE] font-semibold'>{title}</label>
      <input placeholder={title} className='h-9 mt-4 mb-8 border-0 bg-inherit border-b-2 border-[#254336] text-black w-48 placeholder:text-black sm:w-60'/>
    </div>
  )
}

export default contactdiv

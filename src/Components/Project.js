import React from 'react'

function Project({title,image,description,github,link}) {
  return (
    <div className='h-auto m-4 rounded-2xl '>
      <a href={link} target='_blank' rel="noreferrer"><img src={image} alt={title} className='object-cover image shadow-xl'/></a>
      <div className='flex justify-between'>
      <div className='text-2xl font-bold left-[83px] font-mono my-4 text-[#254336]'>{title}</div>
      <div className='flex'>
      <a href={github} target='_blank' rel='noreferrer'><img src="/github.png" alt="Github Link" className='h-7 w-7 mt-5 mx-2 '/></a>
      </div>
      </div>
      <span className='text-base text-[#DAD3BE]'>{description}</span>
    </div>
  )
}

export default Project

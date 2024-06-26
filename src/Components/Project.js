import React from 'react'

function Project({title,image,description,github,link}) {
  return (
    <div className='h-auto m-4 rounded-2xl '>
      <img src={image} alt={title} className='object-cover '/>
      <div className='flex justify-between'>
      <div className='text-2xl font-bold left-[83px] font-mono my-4 text-[#254336]'>{title}</div>
      <div className='flex'>
      <a href={github} target='_blank' rel='noreferrer'><img src="/github.png" alt="Github Link" className='h-7 w-7 mt-5 mx-2'/></a>
      <a href={link} target="_blank" rel="noreferrer"><img src="/sitelink.png" alt="Direct Link" className='h-7 w-7 mt-5'/></a>
      </div>
      </div>
      <span className='text-base text-[#DAD3BE]'>{description}</span>
    </div>
  )
}

export default Project

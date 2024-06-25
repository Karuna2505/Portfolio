import React from 'react';

function Skill({title,image}) {
  return (
    <div className='flex flex-col items-center m-8'>
      <img src={image} alt={title} className='h-32 w-24'/>
      <h1 className='text-2xl font-semibold '>{title}</h1>
    </div>
  )
}

export default Skill

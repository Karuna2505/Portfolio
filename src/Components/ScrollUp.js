import React from 'react'

function ScrollUp() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <div>
      <button className='fixed bottom-0 right-0 m-10 h-12 w-12' onClick={scrollToTop}>
        <img src='/scroll.png' alt="Scroll Up Button"/>
      </button>
    </div>
  )
}

export default ScrollUp

import React from "react";

function Button({title}) {
  
  return (
    <a href="#contact">
      <button className="learn-more relative mx-7 font-semibold text-[#254336] px-3 py-2 bg-[#DAD3BE] border-2 border-[#254336] rounded-lg">
        {title}
      </button>
    </a>
  );
}

export default Button;

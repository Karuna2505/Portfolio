import React from "react";

function About() {
  return (
    <div className="h-[30rem] bg-[#6B8A7A] flex flex-col items-center">
      <h1 className="text-[#e3decf] font-bold text-5xl mt-10">ABOUT ME</h1>
      <h1 className="text-[#DAD3BE] font-normal text-xl w-4/5 mt-9 m-6">
        Hi! I'm Karuna, a web developer and recent graduate from Netaji Subhas
        University of Technology. Although I'm a fresher, I've already gained
        valuable experience by completing various web development projects. My
        proficiency in Java has enabled me to build a strong foundation in
        programming. I'm eager to apply my skills and knowledge to real-world
        problems and continue learning and growing as a software engineer.
      </h1>
      <h1 className="text-[#DAD3BE] font-normal text-xl w-4/5 m-2"> Apart
        from coding, I enjoy exploring my creative side through sketching and
        staying active with sports like table tennis. These hobbies help me
        maintain a healthy work-life balance and fuel my passion for innovation
        and problem-solving.</h1>
        <a href="https://drive.google.com/file/d/1zfoUt7KwqNzwsl_OgQyr6zeNKgTuDW5g/view?usp=sharing" className="text-xl bg-[#254336] p-3 text-[#DAD3BE] rounded-xl mt-9">RESUME</a>
        
    </div>
  );
}

export default About;

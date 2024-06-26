import React from "react";
import Skill from "../Components/Skill";
const skillsData = [
    { id: 1, title: 'React.js', image:'/react.png', description: 'A JavaScript library for building user interfaces' },
    { id: 2, title: 'JavaScript', image:'/javascript.png', description: 'High-level, often just-in-time compiled language' },
    { id: 3, title: 'HTML', image: '/html.png', description: 'Standard markup language for creating web pages' },
    { id: 4, title: 'CSS', image: '/css.png', description: 'Style sheet language used for describing the presentation' },
    { id: 5, title: 'Next.js', image:  '/next.png', description: 'JavaScript runtime built on Chrome\'s V8 engine' },
    { id: 6, title: 'Java' , image: '/java.png',description: 'Java is a object oriented programming language.'},
    { id: 7, title: 'TailwindCss',image:'/tailwind.png',description: 'Css tool'},
    { id: 8, title: 'Git', image: '/git.png',description:'git is a version control system.'},
    { id: 9, title: "Github", image:'/github.png' , description: 'github is a storage'},
    { id: 10, title: 'Sql',image:'/sql.png',description: "Structured Query Language to maintain,update and retrieve data."},
  ];

function Skills() {
  return (
    <div id="skills" className="h-auto flex flex-col items-center">
      <h1 className="text-5xl text-[#254336] font-bold mt-14">SKILLS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-4 mt-6">
        {skillsData.map(skill => (
          <Skill
            key={skill.id}
            title={skill.title}
            image={skill.image}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;

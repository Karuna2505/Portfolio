import React from 'react'
import Project from '../Components/Project'

const projectsData=[
  {id:1,title:'Youtube Clone',image:"/youtube.jpg",description:"Created a functional replica of the YouTube platform, focusing on user-friendly video playback and search feature. Successfully mimicked the core functionalities of the original site to provide a familiar and intuitive experience for users.",github:"https://github.com/Karuna2505/Youtube-Clone",link:"https://youtubeclonebykaruna.netlify.app/"},
  {id:2,title:'News App',image:"/News.jpg",description:"Developed a news app integrating Firebase for secure user authentication,Firestore to efficiently store user preferences such as liked articles, and NewsAPI for seamless real-time data fetching. Demonstrated proficiency in leveraging diverse technologies to enhance app functionality and user experience.",github:"https://github.com/Karuna2505/news-reader",link:"https://phenomenal-nasturtium-8ff1f4.netlify.app/"},
  {id:3,title:"Weather App",image:"/weather.jpg",description:"This website shows real-time and forecast weather data in a user-friendly and responsive UI using Weather API. You can also search for any city worldwide and get weather info quickly. Search also has an autocomplete feature.",github:"https://github.com/Karuna2505/Weather-App",link:"https://weather-app-bykaruna.netlify.app/"},
  {id:4,title:'ToDo App',image:"/todo.jpg",description:"Developed this website, to allow users to add and manage their todo-items.You can delete the item when you want to.",github:"https://github.com/Karuna2505/Todo-App",link:"https://todoappbykaruna.netlify.app/"},
  {id:5,title:"Verdant",image:"/Verdant.jpg",description:"Developed a full stack plant selling website.Created an api from where the data is bieng fetched.Implemented user authentiaction.Created reponsive UI for better experience.",github:"https://github.com/Karuna2505/Verdant",link:"https://verdant-frontend.onrender.com/"},
  
]

function Projects() {
  return (
    <div id='projects' className='h-auto bg-[#6B8A7A] flex flex-col items-center'>
      <h1 className='text-5xl text-[#e3decf] font-bold mt-14'>Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 m-6 sm:mx-10'>
      {projectsData.map(project => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            github={project.github}
            link={project.link}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects

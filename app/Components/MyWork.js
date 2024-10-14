

import React from 'react';
import Project1 from './Images/Explore ai .jpg'

const projects = [
  {
    title: 'Explore Ai Chatbot',
    description: 'Used Google Gemini Key For Answering Questions ',
    imageUrl:'https://th.bing.com/th?id=OIP.mh__8BvgS3sw-uiZPQvqhQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2', // Replace with your project image URL'
    link: 'https://rehanbagwan007.github.io/Explore-Ai-Chatbot/',
  },
  {
    title: 'Royal Enfield Functional Clone(Upcoming)',
    description: 'Project in Process',
    imageUrl: 'https://th.bing.com/th/id/OIP.n9D2CvwwhvYJqTsLyMJS9QHaEv?w=252&h=180&c=7&r=0&o=5&pid=1.7', // Replace with your project image URL
    link: '#',
  },
 
  // You can easily add more projects here
];

const MyWorks = () => {

  console.log(Project1)
  return (
    <div className="py-10 bg-gray-900 text-white">
      <h2 className="text-4xl text-center mb-8">My Works</h2>
      <div className="  container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition duration-300"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;

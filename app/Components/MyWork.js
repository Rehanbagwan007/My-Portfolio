

import React from 'react';
import Project1 from './Images/Explore ai .jpg'

const projects = [
  {
    title: 'Explore Ai Chatbot',
    description: 'Used Google Gemini Key For Answering Questions ',
    imageUrl: `/_next/static/media/Explore ai .89cea1c1.jpg`, // Replace with your project image URL
    link: 'https://github.com/upstash/rag-chat/tree/master/examples/nextjs/chat-to-website',
  },
  {
    title: 'Bugati Website Clone (Upcoming)',
    description: 'Building Bugati Automobile Website Colne Animated And Effects',
    imageUrl: 'https://imgs.search.brave.com/PldJaS7WCu_O1jqpk4x_ZeoHJerOvZGrFamqyPTGAf0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYXJx/dWUtdm9pdHVyZS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMTAvTGEtZGVz/Y3JpcHRpb24tZHUt/bG9nby1CdWdhdHRp/LTYwMHg0NTAuanBn', // Replace with your project image URL
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

"use cleint"

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiGreensock, SiThreedotjs } from 'react-icons/si';

const Introduction = () => {
  const introRef = useRef();

  useEffect(() => {
    gsap.fromTo(introRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20 px-4">
      <h2 className="text-5xl font-bold text-yellow-300 mb-8">Introduction</h2>
      <p className="text-3xl font-semibold text-white mb-4">I'm Rehan Bagwan</p>
      <p className="text-xl text-gray-300 mb-10 text-center">
        Diploma Third Year Of Automobile Engineering
      </p>
      <div className="flex flex-wrap justify-center space-x-8 mb-8">
        {/* Logos */}
        <FaHtml5 className="text-orange-600 text-6xl" />
        <FaCss3Alt className="text-blue-600 text-6xl" />
        <FaJs className="text-yellow-500 text-6xl" />
        <FaReact className="text-blue-400 text-6xl" />
        <SiNextdotjs className="text-gray-100 text-6xl" />
        <SiTailwindcss className="text-teal-400 text-6xl" />
        <FaBootstrap className="text-purple-600 text-6xl" />
        <SiGreensock className="text-green-500 text-6xl" />
        <SiThreedotjs className="text-gray-500 text-6xl" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 text-lg">
        <p className="text-yellow-300">HTML5</p>
        <p className="text-yellow-300">CSS3</p>
        <p className="text-yellow-300">JavaScript</p>
        <p className="text-yellow-300">React.js</p>
        <p className="text-yellow-300">Next.js</p>
        <p className="text-yellow-300">Tailwind CSS</p>
        <p className="text-yellow-300">Bootstrap</p>
        <p className="text-yellow-300">GSAP</p>
        <p className="text-yellow-300">Three Fiber</p>
      </div>
    </div>
  );
};

export default Introduction;

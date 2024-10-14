

"use client"
import React from 'react';
import { useState } from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Footer = () => {


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Email:', email, 'Message:', message);
  };









  return (
    <footer className="relative w-full     bg-gray-900 flex flex-col items-start justify-center overflow-hidden  mx-h-[680px] ">
     
      <div className=" absolute z-10   bg-blue-500 w-screen h-[600px] mt-[25vw]">
       

        //

        <div className="relative z-10  container right-4   lg:right-[20vw] ">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center ">
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full max-w-md p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-4 w-full max-w-md p-3 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-all duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="absolute w-scre mt-[10vh] right-20 lg:right-0  lg:top-[6vw] lg:mt-2  ">

        
          <div className='flex gap-3 '><MdEmail />rehanbagwan10000@gmail.com </div>
          <div className='flex gap-3'><FaPhone />+91 8432905952</div>
          <div className="flex gap-3"><FaMapLocationDot />Khanbhag Khamkar Galli Sangli</div>
          <div>,Maharashtra 416416</div>


          
        </div>

        
      </div>
   
      

        <p className="text-white mt-3 mb-1 text-sm font-light">&copy;2024 Rehan Bagwan | All Rights Reserved</p>
      </div>

      {/* Wave Animation */}
      <div className="relative w-full h-[100vh]  lg:h-[70vh] ">
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/wQZVxxk/wave.png')] bg-repeat-x bg-[length:1000px_100px] opacity-100bg-repeat-xopacity-100 animate-wave-1"
          style={{
            animation: 'animateWaves 4s linear infinite',
            bottom: 0,
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/wQZVxxk/wave.png')] bg-repeat-x bg-[length:1000px_100px] opacity-50 animate-wave-2"
          style={{
            animation: 'animateWaves 4s linear infinite',
            bottom: '10px',
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/wQZVxxk/wave.png')] bg-repeat-x bg-[length:1000px_100px] opacity-20 animate-wave-3"
          style={{
            animation: 'animateWaves 3s linear infinite',
            bottom: '15px',
          }}
        ></div>
        <div
          className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/wQZVxxk/wave.png')] bg-repeat-x bg-[length:1000px_100px] opacity-70 animate-wave-4"
          style={{
            animation: 'animateWaves 3s linear infinite',
            bottom: '20px',
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes animateWaves {
          0% {
            background-position-x: 1000px;
          }
          100% {
            background-position-x: 0px;
          }
        }
      `}</style>
    </footer>
  
  );
};

export default Footer;
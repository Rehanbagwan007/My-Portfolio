

"use client"
import React from 'react';
import { useState } from 'react';

const Footer = () => {


  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Email:', email, 'Message:', message);
  };









  return (
    <footer className="relative w-full  bg-gray-900  min-h-[100px] py-5 flex flex-col items-center justify-center overflow-hidden bottom-[1vh] pt-25">
     
      <div className=" absolute z-10 bottom-3 bg-blue-500 w-screen">
        <ul className="social-icon flex justify-center items-center my-2 flex-wrap">
          <li className="social-icon__item">
            <a className="text-white text-3xl mx-2 transition-transform duration-500 hover:translate-y-[-10px]" href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="text-white text-3xl mx-2 transition-transform duration-500 hover:translate-y-[-10px]" href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="text-white text-3xl mx-2 transition-transform duration-500 hover:translate-y-[-10px]" href="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
          <li className="social-icon__item">
            <a className="text-white text-3xl mx-2 transition-transform duration-500 hover:translate-y-[-10px]" href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>

        //add 

        <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
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
      </div>

        <p className="text-white mt-3 mb-1 text-sm font-light">&copy;2021 Nadine Coelho | All Rights Reserved</p>
      </div>

      {/* Wave Animation */}
      <div className="relative w-full h-[30vh]">
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

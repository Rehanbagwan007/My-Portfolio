"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(nameRef.current, { opacity: 0, y: -50 }, { duration: 1, opacity: 1, y: 0 });
  }, []);

  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1
          ref={nameRef}
          className="text-4xl italic tracking-wider transition duration-300 hover:text-yellow-300"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Rehan Bagwan
        </h1>

        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase()}`}>
              <span className="relative px-3 py-2 transition duration-300 hover:bg-yellow-300 hover:text-purple-700 rounded-full">
                {item}
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Rehanbagwan007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-bagwan-00a719244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <nav className="flex flex-col space-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`}>
                <span className="relative px-3 py-2 transition duration-300 hover:bg-yellow-300 hover:text-purple-700 rounded-full">
                  {item}
                </span>
              </Link>
            ))}
          </nav>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Rehanbagwan007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rehan-bagwan-00a719244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

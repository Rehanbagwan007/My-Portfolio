import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useTexture } from '@react-three/drei';

// URLs of images for each face of the cube
const imageUrls = [
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 
  'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg', // CSS
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', // Tailwind
  'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg', // React
  'https://imgs.search.brave.com/MwL4dgRTnRqgRcCXANTVbilzOVa3unoOIHsa6hXJR0k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c3RhY2tzaGFyZS5p/by9zZXJ2aWNlLzU5/MzYvbmV4dGpzLnBu/Zw', // Next.js
  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg', // Bootstrap
];

// Rotating cube component with self-shadow and standard materials
const RotatingCube = () => {
  const meshRef = useRef();
  const textures = useTexture(imageUrls);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotating effect
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[4, 4, 4]} castShadow receiveShadow>
      <boxGeometry />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

// Main banner component
const Banner = () => {
  return (
    <div
      className="h-[70vh] bg-cover bg-center  bg-gray-1000 flex items-center justify-center text-white"
      style={{
       // backgroundImage: 'url("https://example.com/your-dark-background.jpg")', // Replace with your dark background image URL
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between m-[24vw]">
        {/* Text Section */}
        <div className="text-center md:text-left md:mr-8 mb-8 md:mb-0">
          <h1 className="text-6xl font-[Dancing Script] text-yellow-300">I'm</h1>
          <h1 className="text-5xl font-bold text-white mt-2">Rehan Bagwan</h1>
          <h2 className="text-2xl mt-4 text-gray-200">Frontend Developer</h2>
        </div>

        {/* 3D Model Section */}
        <Canvas shadows>
          <ambientLight intensity={2} />
          <directionalLight position={[2, 5, 5]} intensity={8} castShadow />
          <RotatingCube />
        </Canvas>
      </div>
    </div>
  );
};

export default Banner;


"use cleint"

import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Welcome to My Portfolio"; 

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <h1 className="text-4xl font-bold text-white">{displayedText}</h1>
    </div>
  );
};

export default Loading;

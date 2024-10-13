"use client"


import React, { useState, useEffect } from 'react';
import Loading from './Components/Loading';
import Header from './Components/Header';// Adjust the path if needed
import Banner from './Components/Banner';
import Introduction from './Components/Introduction';
import MyWorks from './Components/MyWork';
import Footer from './Components/Footer';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500); // Duration for loading screen (3 seconds)

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <div>
      {/* Conditional Loading Screen */}
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Main Content */}
          <Header></Header>
          <Banner />
          <Introduction />
          <MyWorks></MyWorks>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default HomePage;


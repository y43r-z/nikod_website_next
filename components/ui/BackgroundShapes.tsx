"use client";
import React from "react";

const BackgroundShapes = () => {
  return (
    <>
      <div className="absolute top-30 right-20 w-20 h-20 bg-blue-200 rounded-full opacity-30 blur-sm"></div>
      <div className="absolute top-120 right-30 w-24 h-24 bg-blue-200 rotate-12 opacity-20"></div>
      <div className="absolute top-40 left-1/4 w-16 h-16 bg-yellow-100 clip-path-polygon opacity-25"></div>
      <div className="absolute top-120 left-1/6 w-16 h-16 bg-yellow-100 clip-path-polygon opacity-25"></div>

    
      <div className="absolute top-90 right-60 w-10 h-10 bg-yellow-100 rotate-12 opacity-20 rounded-full"></div>
      <div className="absolute top-90 left-60 w-5 h-5 bg-blue-200 rotate-12 opacity-20 rounded-full"></div>
      {/* <div className="absolute top-40 left-120 w-16 h-16 bg-blue-200 clip-path-polygon opacity-25 rounded-full"></div> */}
      <div className="absolute top-200 left-1/6 w-10 h-10 bg-blue-300 clip-path-polygon opacity-25 rounded-full" ></div>




    </>
  );
};

export default BackgroundShapes;

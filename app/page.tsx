"use client"


import Image from "next/image";
import Squares from "./components/Squares";
  

export default function Home() {
  return (
    <>
    <div className="background-layer w-full h-screen border-none block">
      <Squares 
      speed={0.3} 
      squareSize={20}
      direction='diagonal' 
      borderColor='#c5c5c5'
      hoverFillColor='#222'
      />
    </div>
    <div className="content-layer flex flex-col items-center justify-center min-h-screen">
      <h1>eee</h1>
    </div>
    </>
  );
}

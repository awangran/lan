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
      <h1 className="tracking-widest font-semibold text-8xl">Lan</h1>
      <button className="bg-[#191919] mt-5 rounded-full py-2 px-10 text-lg text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
 hover:text-black shadow-lg
">Ingresar</button>
      
    </div>
    </>
  );
}

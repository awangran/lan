'use client'
import SelectableField from '@/app/components/SelectableField';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function page() {
  const [selectedValues, setSelectedValues] = useState<string>("");

  const questions = [
    "¿Cómo quieres que te llamen?i",
    "How old are you?",
    "What's your favorite color?",
    "Where do you live?",
  ];
  
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };


  return (
    <>
    <div className='h-screen w-full flex flex-col align-middle'>
    <div className='align-center '>
        <h1 className='font-figtree text-5xl text-semibold text-[#191919] m-15'>Cuéntanos sobre ti 👀...</h1>
    </div>

    {step === 1 && (
      <div className="transition-opacity duration-300">
        <div className='w-full flex flex-col justify-center align-center items-center mt-10 p-10 md:mt-30'>
            <h2 className='text-3xl text-semibold text-[#191919] text-center mb-10'>¿Cómo quieres que te llamen?</h2>
            <input type="text" name="username" id="username" placeholder='username' className=" border block bg-white rounded-full min-w-0 grow py-3 px-6 text-lg  w-xs text-gray-900 placeholder:text-gray-400  focus:outline-none md:w-md sm:text-sm/6"></input> 
        </div>

        <div className='w-full items-center justify-center flex pb-4 p-5'>
          <button onClick={() => nextStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
              hover:text-black shadow-lg">
                <FaArrowRight fontSize='30px' />
          </button> 
        </div>
      </div>
    )}

    {step === 2 && (
      <div className="transition-opacity duration-300">
        <SelectableField
        question="¿Qué estilos te gustan?"
        fields={["Clásico", "Street", "Alternativo", "Deportivo", "Casual"]}
        onUpdate={(value: string) => setSelectedValues(value)}
      />
      
        <div className='w-full items-center flex-row gap-4 justify-center flex pb-4 p-5'>
          <button onClick={() => prevStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
              hover:text-black shadow-lg">
                <FaArrowLeft fontSize='30px' />
          </button>
          <button onClick={() => nextStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
              hover:text-black shadow-lg">
                <FaArrowRight fontSize='30px' />
          </button> 
        </div>
      </div>
    )}

  {step === 3 && (
        <div className="transition-opacity duration-300">
          <SelectableField
          question="¿Qué tipo de moda buscas?"
          fields={["Mujer", "Hombre", "Unisex", "Niños", "Mascotas"]}
          onUpdate={(value: string) => setSelectedValues(value)}
        />
        
          <div className='w-full items-center flex-row gap-4 justify-center flex pb-4 p-5'>
            <button onClick={() => prevStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
                hover:text-black shadow-lg">
                  <FaArrowLeft fontSize='30px' />
            </button>
            <button onClick={() => nextStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
                hover:text-black shadow-lg">
                  <FaArrowRight fontSize='30px' />
            </button> 
          </div>
        </div>
      )}

{step === 4 && (
      <div className="transition-opacity duration-300">
        <SelectableField
        question="¿Qué edad tienes?"
        fields={["< 18 ", "18-25", "25-40", "40-50", "50+"]}
        onUpdate={(value: string) => setSelectedValues(value)}
      />
      
        <div className='w-full items-center flex-row gap-4 justify-center flex pb-4 p-5'>
          <button onClick={() => prevStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
              hover:text-black shadow-lg">
                <FaArrowLeft fontSize='30px' />
          </button>
          <button onClick={() => nextStep()} className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
              hover:text-black shadow-lg">
                Continua
          </button> 
        </div>
      </div>
    )}



    </div>
    </>
  )
}

export default page
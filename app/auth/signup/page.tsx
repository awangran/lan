"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import GridMotion from '../../components/GridMotion'
import Blackbox from '../../components/Blackbox'
import { FaFacebook,FaPinterest,FaInstagram,FaGoogle } from "react-icons/fa";
import {doc, setDoc, getFirestore } from "firebase/firestore";
import app from '../../share/firebaseConfig'

function page() {

    const { data: session } = useSession()
    console.log(session)
    const db = getFirestore(app);

    useEffect(() => {
        if (session?.user) {
          saveUserInfo();
        }
      }, [session]);
      
    

      const saveUserInfo = async () => {
        if (!session?.user) return; 
        
        try {
          const userRef = doc(db, "users", session.user.email);
          await setDoc(userRef, {
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
          }, { merge: true });
      
          console.log("User info saved!");
        } catch (error) {
          console.error("Error saving user info:", error);
        }
    }

    const handleGoogleSignIn = async () => {
        const result = await signIn("google", { redirect: false });
    
        if (result?.error) {
        console.error("Sign-in error:", result.error);
        } else {
        console.log("Signed in successfully");
        }
    };


    const items = [
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        <Blackbox />,
        'https://i.ibb.co/60zDDgYT/marissa-grootes-D4j-Raha-Ua-Ic-unsplash.jpg',
        'https://i.ibb.co/zHhSXRtG/aiony-haust-K0-Dxxljc-Rv0-unsplash.jpg',
        'https://i.ibb.co/GQTN94wr/jade-aucamp-Kj6-Lg-Gce-Z4-M-unsplash.jpg',
        'https://i.ibb.co/3ysmCHHG/mike-von-2-UTk-Nip5a-M-unsplash.jpg',
        'https://i.ibb.co/LGhr0F2/s-o-c-i-a-l-c-u-t-a-XJdmnxauw-Y-unsplash.jpg',
        'https://i.ibb.co/gMC9pgkP/mohamadreza-khashay-ziub-UDop-Hmc-unsplash.jpg',
        'https://i.ibb.co/5XxsrVZF/mike-von-Ysi-SAp3ccvk-unsplash.jpg',
        'https://i.ibb.co/60zDDgYT/marissa-grootes-D4j-Raha-Ua-Ic-unsplash.jpg',
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://i.ibb.co/qMH25gMd/katsiaryna-endruszkiewicz-Bte-Cp6aq4-GI-unsplash.jpg',
        'https://i.ibb.co/rGHXk6G6/freestocks-3-Q3ts-J01nc-unsplash.jpg',
        'https://i.ibb.co/FbJrjGYd/cat-han-Ks6wd1-Zyf1o-unsplash.jpg',
        'https://i.ibb.co/xnc81N7/alyssa-strohmann-TS-u-Nw-Jq-E-unsplash.jpg',

        
      ];
  return (
    <>
    <div className='h-screen w-full grid grid-cols-1 md:grid-cols-2'>
    <div className='container w-full flex flex-col justify-center items-center'>
    <h1 className='font-figtree text-3xl text-semibold text-[#1F1F1F] mb-10 md:hidden'>¡Hola! Bienvenido a Lan  &#128075; </h1>

        <div className='card rounded-md bg-[#F5F5F5]  w-3/4 p-5 shadow-lg'>
            
            <h2 className='my-6 text-2xl md:text-4xl font-figtree text-center font-medium'>Log In</h2>
            
            <div className='w-full flex flex-col justify-center items-center mb-5'>
                <div onClick={() => handleGoogleSignIn()} className='gap-2 justify-center items-center flex flex-row 
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300 cursor-pointer'>
                    <div>
                    <FaGoogle className='text-2xl' />
                    </div>

                    <div>
                        <p className='text-center text-medium text-sm'>Continua con Google</p>
                    </div> 
                </div>

               {/*  <div className='gap-2 justify-center items-center flex flex-row mt-2
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300 cursor-pointer'>
                    <div>
                    <FaFacebook className='text-2xl' />

                    </div>
                    <div>
                        <p className='text-center text-medium text-sm'>Continua con Facebook</p>
                    </div> 
                </div> */}

                <div className='gap-2 justify-center items-center flex flex-row mt-2
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300 cursor-pointer'>
                    <div>
                    <FaInstagram className='text-2xl' />

                    </div>
                    <div>
                        <p className='text-center text-medium text-sm'>Continua con Instagram</p>
                    </div> 
                </div>

                <div className='gap-2 justify-center items-center flex flex-row mt-2
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300 cursor-pointer'>
                    <div>
                    <FaPinterest className='text-2xl' />

                    </div>
                    <div>
                        <p className='text-center text-medium text-sm'>Continua con Pinterest</p>
                    </div> 
                </div>
                

            </div>

            <div className='spacer'>
                <p className='text-[#E5E5E5] text-center text-xl'>––––   &nbsp; o &nbsp;   ––––</p>
            </div>


            {/*Optional email con password login pero me da pava encrypt jaja me ahorro login page tambien xdxd*/}
            {/* <div className='m-6'> 
                <p className='ml-2 mb-3'>Email*</p>
                <input type="text" name="email" id="email" className="w-full block bg-white rounded-full min-w-0 grow py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"></input>
                <p className='ml-2 mb-3 mt-4'>Password*</p>
                <input type="password" name="password" id="password" className="w-full block bg-white rounded-full min-w-0 grow py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"></input>

                <p className='text-sm text-center m-2'>¿Ya tienes una cuenta? <Link href='/auth/login'><u>Log In</u></Link></p>
                
            </div> */}

            <div className='w-full items-center justify-center flex pb-4 p-5'>
            <button className="bg-[#191919]  rounded-full py-2 px-10 text-md text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
                hover:text-black shadow-lg">Continua como invitado
            </button> 
            </div>
        
        
    </div>
    </div>

    <div className=' bg-[#1f1f1f] flex flex-col hidden md:flex'>
        <div className='w-1/2 m-16 content-layer2'>
        <h1 className='font-figtree text-5xl text-semibold text-[#D9D9D9]'>¡Hola! Bienvenido a Lan  &#128075; </h1>
        </div>
        <div className='background-layer2'>
            <GridMotion items={items} />

        </div>
    </div>
    </div>
    </>
  )
}

export default page
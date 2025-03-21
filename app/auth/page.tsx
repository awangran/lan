"use client"
import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import GridMotion from '../components/GridMotion'
import Blackbox from '../components/Blackbox'

function page() {
    const { data: session } = useSession()
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
    <div className='container w-full flex justify-center items-center'>
        <div className='card rounded-md bg-[#F5F5F5]  w-3/4 p-5 shadow-lg'>
            <h2 className='my-6 text-4xl font-figtree text-center font-medium'>Crea tu cuenta</h2>
            
            <div className='w-full flex flex-col justify-center items-center mb-5'>
                <div className='gap-2 justify-center items-center flex flex-row
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/></svg>
                    </div>
                    <div>
                        <p className='text-center text-medium text-sm'>Sign up with Google</p>
                    </div> 
                </div>

                <div className='gap-2 justify-center items-center flex flex-row mt-2
                 align-middle google bg-white border-[#e0e0e0] w-3/4 border rounded-lg px-2 py-2 hover:bg-[#e0e0e0] transition duration-300'>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                    </svg>
                    </div>
                    <div>
                        <p className='text-center text-medium text-sm'>Sign up with Apple</p>
                    </div> 
                </div>

            </div>

            <div className='spacer'>
                <p className='text-[#E5E5E5] text-center text-xl'>––––   &nbsp; o &nbsp;   ––––</p>
            </div>

            <div className='m-6'> 
                <p className='ml-2 mb-3'>Email*</p>
                <input type="text" name="email" id="email" className="w-full block bg-white rounded-full min-w-0 grow py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"></input>
                <p className='ml-2 mb-3 mt-4'>Password*</p>
                <input type="password" name="password" id="password" className="w-full block bg-white rounded-full min-w-0 grow py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"></input>
                <button onClick={() => signIn()}>Sign in</button>

                <p className='text-sm text-center m-2'>¿Ya tienes una cuenta? <Link href=''><u>Log In</u></Link></p>
                
            </div>
            <div className='w-full items-center justify-center flex pb-4'>
            <button className="bg-[#191919] mt-5 rounded-full py-2 px-10 text-lg text-white hover:bg-[#f1f1f1] hover:border-[#c5c5c5]] hover:border-2 transition duration-300
                hover:text-black shadow-lg">Regístrate
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
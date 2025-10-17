import React from 'react'
import logo from "../assets/image/logo.jpeg"
import DeveloperCard from '../components/Developer/DeveloperCard'

import nikko from "../assets/image/Icon/nikko-icon.png"
import mayoe from "../assets/image/Icon/mayoe-icon.png"
import itan from "../assets/image/Icon/itan-icon.png"
import ger from "../assets/image/Icon/roger-icon.png"
import rhae from "../assets/image/Icon/rhae-icon.png"
import gab from "../assets/image/Icon/gab-icon.png"
import niss from "../assets/image/Icon/niss-icon.png"
import kit from "../assets/image/Icon/keith-icon.png"

const DevelopersPage = () => {

   const  developers = [
        {
            name: "okkinohj",
            role: "Fullstack Devoloper",
            img: nikko
        },
        {
            name: "Lnchvrl",
            role: "Frontend Developer",
            img: mayoe
        },
           {
            name: "Tian",
            role: "Frontend Devoloper",
            img: itan
        },
           {
            name: "Ger",
            role: "Frontend Devoloper",
            img: ger
        },
           {
            name: "Rhae",
            role: "Frontend Devoloper",
            img: rhae
        },
           {
            name: "Gab",
            role: "Frontend Devoloper",
            img: gab
        },
           {
            name: "Niss",
            role: "Frotnend Developer",
            img: niss
        },
           {
            name: "Kit",
            role: "Frontend Developer",
            img: kit
        }
    ]

  return (
    <div className='w-full min-h-screen bg-[linear-gradient(-140deg,#0a0a0a_50%,#e6bc06_50%)]'>
        <div className='w-full flex flex-col items-center justify-center pt-32'>
            <img src={logo} alt="" className='h-40 w-40 rounded-full border-yellow-500 border mb-5'/>
            <h1 className='text-2xl font-semibold bg-black/70 p-2 rounded-md text-yellow-500'>Meet the F3 Zone Developers</h1>

            <div className='my-10 grid grid-cols-1 sm:grid-cols-4 gap-10'>

            {developers.map((dev, i) => (
                < DeveloperCard
                    key={i}
                    img={dev.img}
                    name={dev.name}
                    role={dev.role}
                />
            ))}

            </div>
        </div>
    </div>
  )
}

export default DevelopersPage
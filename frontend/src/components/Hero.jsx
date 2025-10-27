import React from 'react'
import heroVideo from "../assets/image/f3-video-home.mp4"

const Hero = () => {
  return (
    <div className='relative h-screen w-full' id='home'>
       <video 
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            src={heroVideo}
            autoPlay
            loop
            playsInline
            muted
        />
    
    
    
        <div className="z-20 relative flex flex-col items-center text-center justify-center h-full text-white">
            <h2 className="text-5xl font-bold text-yellow-500">TAKE YOUR FITNESS TO NEW HEIGHTS</h2>
            <h3 className="text-4xl font-semibold text-yellow-500">FULL FORCE FITNESS</h3>
            <p className="">YOUR TRANSFORMATION, OUR MISSION</p>
        </div>
        </div>
  )
}

export default Hero
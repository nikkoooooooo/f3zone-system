import React from 'react'
import bgPricing from "../../assets/image/pricing-bg.jpg"
import PricingCard from '../Pricing/PricingCard.jsx'
const Pricing = () => {
  return (
    <div className='bg-black relative w-full min-h-screen text-center flex flex-col items-center 
    bg-[linear-gradient(140deg,#0a0a0a_50%,#e6bc06_50%)]' id='pricing'>
        {/* <img src={bgPricing} alt="" className='absolute left-0 top-0 z-0  w-full h-full object-cover '/> */}
        <h1 className='text-5xl font-bold pt-[120px] pb-20 text-yellow-500 z-50'>Rates</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2  w-[90%]  justify-around px-5 gap-8 pb-10'>

                {/* student section */}
                <PricingCard 
                    title='Student Membership'
                    valueDayPass={80}
                    value1={800}
                    value2={2000}
                    value3={3500}
                    value4={6500}
                    save1={400}
                    save2={1300}
                    save3={3100}
                />
                {/* regular section */}
                <PricingCard 
                    title='Regular Membership'
                    valueDayPass={150}
                    value1={1000}
                    value2={2500}
                    value3={4500}
                    value4={8000}
                    save1={500}
                    save2={1500}
                    save3={4000}
                />
            </div>

        
    </div>
  )
}

export default Pricing


// make the pricing card a separate component
// learn more about responsive its not hard its just the freaking logic
// plan for the predefine chat bot
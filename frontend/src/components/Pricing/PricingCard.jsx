import React from 'react'
import { useNavigate } from 'react-router-dom'
const PricingCard = ({ title, valueDayPass, value1, value2, value3, value4, save1, save2, save3}) => {
    const navigate = useNavigate();

    const handleInquiry = () => {
        navigate('/inquiry')
    }

  return (
    <>
        <div className='w-full bg-white rounded-xl flex flex-col items-center gap-3 z-50 p-5'>
            <h2 className='py-5 text-3xl text-black font-bold'>{title}</h2>

            <div className='w-full h-auto flex flex-row justify-around
            border-2 border-gray-400 items-center rounded-lg px-1 py-2'>
                <h4 className='text-xl font-semibold text-black'>1Day</h4>

                <div className='w-32'>
                    <span className='text-xl font-semibold text-black'>P{valueDayPass}</span>
                </div>
            
            </div>

            <div className='w-full h-auto flex flex-row justify-around
            border-2 border-gray-400 items-center rounded-lg px-1 py-2'>
                <h4 className='text-xl font-semibold text-black'>1mon</h4>

                <div className='w-32'>
                    <span className='text-xl font-semibold text-black'>P{value1}</span>
                </div>
            </div>

            <div className='w-full h-auto flex flex-row justify-around
            border-2 border-gray-400 items-center rounded-lg px-1 py-2'>
                <h4 className='text-xl font-semibold text-black'>3mos</h4>

                <div className='w-32'>
                    <span className='text-xl font-semibold text-black'>P{value2}</span>
                    <p className='m-0 p-0 text-yellow-500 font-semibold'>(Save P{save1})</p>
                </div>
                    
            </div>

            <div className='w-full h-auto flex flex-row justify-around
            border-2 border-gray-400 items-center rounded-lg px-1 py-2'>
                <h4 className='text-xl font-semibold text-black'>6mos</h4>

                <div className='w-32'>
                    <span className='text-xl font-semibold text-black'>P{value3}</span>
                    <p className='m-0 p-0 text-yellow-500 font-semibold'>(save P{save2})</p>
                </div>
                    
            </div>

            <div className='w-full h-auto flex flex-row justify-around
            border-2 border-gray-400 items-center rounded-lg px-1 py-2'>
                <h4 className='text-xl font-semibold text-black'>1year</h4>

                <div className='w-32'>
                    <span className='text-xl font-semibold text-black'>P{value4}</span>
                    <p className='m-0 p-0 text-yellow-500 font-semibold'>(Save P{save3})</p>
                </div>
                   
            </div>
            <button className='btn bg-yellow-500 border-none' onClick={handleInquiry}>Inquire Now!</button>

        </div>
    </>
  )
}

export default PricingCard
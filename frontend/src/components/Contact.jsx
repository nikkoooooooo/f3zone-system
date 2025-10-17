import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

const Contact = () => {
  return (
    <div className='bg-[linear-gradient(-140deg,#0a0a0a_50%,#e6bc06_50%)] w-full min-h-screen flex flex-col items-center' id='contact'>
        <h1 className="text-5xl font-bold text-yellow-500 pt-[120px] pb-20">Contact Us!</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full p-5 gap-5'>

            <div className='w-full h-[400px] bg-black flex items-center 
            justify-center border-yellow-500 border rounded-lg px-5'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d61372.24818595498!2d120.5301054575593!3d15.973617299675947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x33913fdc4a884813%3A0x268062b59feff4fe!2s4%2FF%2C%20F3%20Sports%20Center%2C%20EF%20Square%2C%20Manila%20North%20Road%2C%20Poblacion%2C%20Urdaneta%20City%2C%20Pangasinan!3m2!1d15.9735245!2d120.57122729999999!4m5!1s0x33913fdc4a884813%3A0x268062b59feff4fe!2s4%2FF%2C%20EF%20Square%2C%20Manila%20N%20Rd%2C%20Poblacion%2C%20Urdaneta%20City%2C%20Pangasinan!3m2!1d15.9735245!2d120.57122729999999!5e0!3m2!1sen!2sph!4v1758553817459!5m2!1sen!2sph"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className='rounded-lg w-full'
                ></iframe>
            </div>

            <div className='w-full h-[400px] bg-black rounded-lg border-yellow-500 border items-center 
            justify-center flex px-5'>
                <div className='w-full h-[350px] bg-black flex flex-col gap-5 items-center justify-center'>
                    <h1 className='text-black bg-yellow-500 p-2 text-3xl rounded-md
                     border-yellow-500 mt-6 font-semibold'>GET IN TOUCH</h1>
                    <div className='flex gap-5'>
                        <FontAwesomeIcon icon={faFacebook} className='text-yellow-500 text-4xl' />
                        <FontAwesomeIcon icon={faInstagram} className='text-yellow-500 text-4xl' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
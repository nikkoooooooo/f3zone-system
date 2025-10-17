import React from 'react'

const DeveloperCard = ({ img, name, role }) => {
  return (
    <div>
        <div onClick={()=>document.getElementById('my_modal_2').showModal()}>
            <div className="card bg-white
             w-56 h-68 shadow-sm flex flex-col items-center px-5">
              <figure className="w-full border-b py-5">
                <img
                  src={img}
                  alt="Shoes"
                  className="object-cover w-32 h-32 rounded-full"
                  />
              </figure>

              <div className='flex flex-col gap-5 my-5 text-center'>
                <h2 className='text-black font-bold'>Hi, I am {name} </h2>
                <span className='text-yellow-500 font-semibold'>Role: {role}</span>
              </div>
              
            </div>
          </div>

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Learn this skill at F3 Zone now!</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default DeveloperCard
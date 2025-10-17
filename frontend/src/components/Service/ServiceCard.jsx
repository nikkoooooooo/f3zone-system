
const ServiceCard = ({ title, img, description, brief, id }) => {
  return (
    <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div onClick={()=>document.getElementById(`my_id_${id}`).showModal()}>
            <div className="card bg-white
             w-96 shadow-sm">
              <figure className="w-full">
                <img
                  src={img}
                  alt="Shoes"
                  className="object-cover w-full h-48"
                  />
              </figure>
              <div className="card-body text-black flex items-center">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Find out</button>
                </div>
              </div>
            </div>
          </div>

          <dialog id={`my_id_${id}`} className="modal">
            <div className="modal-box bg-white text-black">
              {/* <h3 className="font-bold text-lg">Hello!</h3> */}
              <p className="py-4">{brief}</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
   )
}

export default ServiceCard
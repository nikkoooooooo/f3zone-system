import React from 'react'

const BlogCard = ({ title, img, description, creator, date} ) => {
  return (
    <>
        <div className="card bg-black w-96 h-96">
            <figure>
                <img
                src={img}
                alt="blog" 
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-between w-full">
                    <div className="">{creator}</div>
                    <div className="">{date}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard
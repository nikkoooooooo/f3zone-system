import React from 'react'
import BlogCard from '../components/Blog/BlogCard'
import BodyBuildTips from "../assets/image/weight-training.jpeg"
import fitnessHome from "../assets/image/tips-fit-home.jpeg"
import nutritionFood from "../assets/image/nutrition-food-pic.jpeg"


const BlogPage = () => {
  return (
    <div className='pt-16 bg-[linear-gradient(140deg,#0a0a0a_50%,#e6bc06_50%)]'>
        <div className='pt-20 w-full min-h-screen flex flex-col 
        justify-start items-center gap-10 '>
            <h1 className='font-bold text-yellow-500 text-4xl'>Latest Blogs</h1>
            <div className='gap-10 flex flex-col sm:flex-row 
            bg-gradient-to-r from-yellow-500 to-black flex-wrap items-center justify-center my-5'>
                <BlogCard                     
                    img={fitnessHome}
                    title="How to stay Fit at Home"
                    description="Discover simple exercises you can do
                    without equipment"
                    creator="Coach Den"
                    date="October 25, 2024"
                />

                 <BlogCard                     
                    img={nutritionFood}
                    title="Nutrition Tips for a Healthy Lifestyle"
                    description="Learn to balance your needs and stay energized"
                    creator="Coach Den"
                    date="November 05, 2024"
                />

                 <BlogCard                     
                    img={BodyBuildTips}
                    title="Top 5 Tips to Build Your Body"
                    description="Boost your workout with these amazing tips"
                    creator="Coach Nova"
                    date="December 18, 2024"
                />
            </div>
        </div>
    </div>
  )
}

export default BlogPage






// responsive burger icon for movile in navbar.
// finish the blog.
// start the authentication finish it in one day.
// create also the login page for the admin and test it, then boom done.
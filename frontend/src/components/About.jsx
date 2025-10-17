import aboutImage from "../assets/image/logo.jpeg"

const About = () => {
  return (
    <>
    <div className="text-center hero min-h-screen 
    bg-[linear-gradient(140deg,#0a0a0a_50%,#e6bc06_50%)]" id="about">
            <div className="hero-content flex-col lg:flex-row bg-gradient-to-r from-yellow-500 to-black">
                <img
                src={aboutImage}
                className="w-64  rounded-lg shadow-2xl"
                />
                <div className="flex items-center sm:items-start justify-center flex-col">
                <h1 className="text-5xl font-bold text-yellow-500 mb-5">About Us!</h1>
                <p className="text-xl text-justify bg-black/70 rounded-lg text-white p-5">
                    At F3 Sports Center, we believe fitness is more than just working out — it’s about transforming lives, building strength, and creating a supportive community.
                    Founded with the mission to make health and wellness accessible to everyone, we offer state-of-the-art facilities, expert trainers, and a variety of fitness programs tailored to all levels — from beginners to athletes.
                    Our commitment goes beyond physical training. 
                </p>
                </div>
            </div>
        </div>
    </>
  )
}   

export default About
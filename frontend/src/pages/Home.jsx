import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing/Pricing.jsx";
import Service from "../components/Service/Service.jsx"
const Home = () => {
  return (
    <div className='z-20 relative w-full'>

        <section className="h-screen">
            <Hero />
        </section>

        <section className=" bg-black">
            <About />
        </section>

        <section className=" bg-black">
            <Service />
        </section>

        <section className=" bg-black">
            <Pricing />
        </section>


        <section>
            <Contact />
        </section>
      
    </div>
  )
}

export default Home;
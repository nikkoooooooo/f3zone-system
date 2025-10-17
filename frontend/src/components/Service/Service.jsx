import ServiceCard from "./ServiceCard"
import taekwondo from "../../assets/image/taekwondo2.jpeg"
import boxing from "../../assets/image/boxing2.jpeg"
import weightTraining from "../../assets/image/weight-training.jpeg"


const Service = () => {
  return (
    <>
    <div className="text-center min-h-screen w-full 
    bg-[linear-gradient(-140deg,#0a0a0a_50%,#e6bc06_50%)]" id="service">
        <h2 className="text-yellow-300 text-5xl font-bold pt-[120px]">OUR SERVICE</h2>
        <p>CHOOSE THE BEST CLASS THAT FITS YOUR LIFESTYLE AND GOALS</p>

        <div className="mt-20 w-full h-auto flex flex-wrap justify-center
        gap-10">   

        <ServiceCard
          id="1"
          img={taekwondo}
          title="TAEKWONDO"
          description="Build discipline and confidence with Taekwondo training"
          brief={`A Korean martial art focused on powerful kicks, discipline, 
          and self-defense. Great for improving flexibility, balance, and confidence.`}
        />

        {/* <ServiceCard 
          img={}
          title="WEIGHT TRAINING"
          description="Build discipline and confidence with Taekwondo training"
        /> */}

        <ServiceCard
          id="2"
          img={boxing}
          title="BOXING/MUAY THAI"
          description="Boost stamina, power, and defense skills, through intense boxinf sessions"
          brief={`A dynamic mix of boxing and Muay Thai that builds endurance, coordination, and striking power while sharpening self-defense skills.`}

        />

        <ServiceCard 
          id="3"
          img={weightTraining}
          title="Weight Training"
          description="Build muscle and strength with our modern gym
          equipment and expert coaching"
          brief={`Targets muscle growth, strength, and overall body toning. 
            Ideal for those looking to build power, improve posture, and boost metabolism.`}
        />

        </div>
    </div>
    </>
  )
}

export default Service
import bgMenu from "../assets/image/menu-bg.png"
import grape from "../assets/image/grape-slushies.png"
import wintermelon from "../assets/image/wintermelon-slushies.png"
import latte from "../assets/image/iced-latte.png"
import americano from "../assets/image/iced-americano.png"

const Treats = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col sm:flex-row justify-evenly items-center py-40 gap-10">
        <img src={bgMenu} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
        <div className="relative inset-0  flex items-center justify-center flex-col gap-10 w-1/2 h-full">
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-black text-6xl font-bold text-center 
                bg-gradient-to-r from-[#f1d02f] to-[#ffbf00]">
                    BCAA <br /> SLUSHIES
                </h1>
                <p className="text-black">MUSCLE RECOVERY + HYDRATION + ENERGY</p>
            </div>
            <div className=" flex flex-wrap flex-col sm:flex-row gap-5 items-center justify-center">
                <div className="h-64 w-72 flex flex-col items-center">
                    <img src={grape} alt="" className="max-w-full"/>
                    <h3 className="text-black font-semibold text-2xl">GRAPE SLUSHIE</h3>
                    <h4 className="text-black font-semibold">P100</h4>
                    <p className="text-black mt-2">0 cal | 0 carbs | 0 sugar</p>
                </div>

                <div className="h-64 w-72 flex flex-col items-center">
                    <img src={wintermelon} alt="" />
                    <h3 className="text-black font-semibold text-2xl">WATERMELON SLUSHIE</h3>
                    <h4 className="text-black font-semibold">P100</h4>
                    <p className="text-black mt-2">0 cal | 0 carbs | 0 sugar</p>
                </div>
            </div>
        </div>


        {/* second section */}


        <div className="relative inset-0  flex items-center justify-center flex-col gap-5 w-1/2 h-full">
            <div className="text-center flex flex-col gap-3">
                <h1 className="text-black text-6xl font-bold text-center 
                bg-gradient-to-r from-[#f1d02f] to-[#ffbf00]">
                    COFFEE <br/> BASED
                </h1>
                <p className="text-black">MUSCLE RECOVERY + HYDRATION + ENERGY</p>
            </div>
            <div className=" flex flex-wrap flex-col sm:flex-row gap-5 items-center justify-center ">
                <div className="h-64 w-72 flex flex-col items-center">
                    <img src={americano} alt=""  className="object-cover"/>
                    <h3 className="text-black font-semibold text-2xl">ICED AMERICANO</h3>
                    <h4 className="text-black font-semibold">P100</h4>
                    <p className="text-black mt-2">0 cal | 0 carbs | 0 sugar</p>
                </div>

                <div className="h-64 w-72 flex flex-col items-center">
                    <img src={latte} alt=""/>
                    <h3 className="text-black font-semibold text-2xl">ICED LATTE</h3>
                    <h4 className="text-black font-semibold">P100</h4>
                    <p className="text-black mt-2">0 cal | 0 carbs | 0 sugar</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Treats
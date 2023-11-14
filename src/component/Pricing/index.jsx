import { Button } from "@nextui-org/react";
import { AiOutlineCheck } from "react-icons/ai"
import { BsFillBasket3Fill } from "react-icons/bs"











































function Pricing() {
    return (

        <>

            <div className="w-full max-w-[360px] h-[auto] bg-[#89bdd3] p-4 rounded-2xl relative flex flex-col">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-[1.8em] font-semibold">$ 12.26</h1>
                        <p className="text-[#fff    ] font-semibold">Basic</p>
                    </div>
                    <div className="w-[60px] h-[60px]"><img className="w-full h-full" src="https://www.skmtechsolutions.com/_next/image?url=%2Fassets%2Fpricing-card-img-2.png&w=1920&q=75" /></div>
                </div>
                <div className="w-full font-semibold mt-[15px]"><p>Features</p></div>
                <div className=" mt-[10px] mb-[90px]">
                    <div className="flex flex-row items-center mt-2">
                        <div className="mr-[10px] text-[14px]"><AiOutlineCheck /></div>
                        <div className="text-[14px]">2 Logo Design Concepts</div>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <div className="mr-[10px] text-[14px]"><AiOutlineCheck /></div>
                        <div className="text-[14px]">2 Logo Design Concepts</div>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <div className="mr-[10px] text-[14px]"><AiOutlineCheck /></div>
                        <div className="text-[14px]">2 Logo Design Concepts</div>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <div className="mr-[10px] text-[14px]"><AiOutlineCheck /></div>
                        <div className="text-[14px]">2 Logo Design Concepts</div>
                    </div>
                </div>
                <div className="rounded-l-3xl bg-white w-3/5 h-[85px] grid place-items-center absolute -bottom-1 -end-1">
                    <Button className="bg-[#b9f7f9] font-semibold text-[15px] text-[#89bdd3] hover:animate-[float_2s_linear_infinite] rounded-2xl w-[90%] h-16 flex justify-center items-center gap-2 z-10 cursor-pointer shadow-lg transition-all duration-100">
                    <div className="text-[#0000] bg-[#000]">
                        
                    <BsFillBasket3Fill/>
                    </div>

                        Order
                    </Button>
                    <span className="w-4 h-4 bg-white absolute -top-4 end-[4px]">
                        <div className="w-full h-full bg-[#89bdd3] rounded-br-3xl"></div>
                    </span>
                    <span className="w-[32px] h-4 bg-white absolute bottom-[4px] -start-4">
                        <div className="w-1/2 h-full bg-[#89bdd3] rounded-br-3xl"></div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default Pricing;
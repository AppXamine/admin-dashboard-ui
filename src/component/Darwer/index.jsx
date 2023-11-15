import { GiHamburgerMenu } from 'react-icons/gi';
import React, { useState } from "react";
import { Drawer } from "antd";
import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";
import { FaHome } from "react-icons/fa";
import { FaStream } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { FaBasketShopping } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";


import "./styles.css";

const DrawerPrimary = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div onClick={showDrawer} className='w-fit h-fit cursor-pointer'>
                <GiHamburgerMenu fill='#96a0b1' size={25} />
            </div>
            <Drawer
                closable={false}
                styles={{body:{backgroundColor:"#f8f9fa"}}}
                className="text-[#344767] h-[100vh]"
                placement="left"
                onClose={onClose}
                open={open}
            >

  
                <div className="w-full h-auto p-[10px] flex justify-between items-center">

 

                    <div className="flex items-center">

                        <div className="w-[50px] h-[50px]">
                            <img className='w-full' src="data:image/png;base64,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" />
                        </div>
                      
  

                        <h2 className='text-[#344767] m-[0] ml-[10px] font-[500]'>Soft UI Dashboard PRO</h2>
                    </div>

                    <div className="w-fit h-fit cursor-pointer" onClick={onClose}><AiOutlineClose fill='#344767' fontSize={20} /></div>
                </div>



  
                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <FaHome className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >Home</p>
                </div>


  
                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <LuGalleryHorizontalEnd className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >Gallary</p>
                </div>


                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <FaStream className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >About</p>
                </div>


                <div className="w-full h-auto mt-[20px]">
                    <h2 className='text-[#344767] m-[10px] font-[500] text-[1.2em] text-[#98a0a8]'>Favorities</h2>
                </div>

                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <MdDashboard className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >DashBoard</p>
                </div>

                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <FiPackage className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >Packages</p>
                </div>

                <div className="listItems w-full  cursor-pointer max-w-[330px] h-auto p-[10px] m-[10px] flex items-center gap-[10px] rounded-[10px] mr-[10px] hover:bg-[#fff]">
                    <div className='w-[35px] h-[35px] flex justify-center items-center rounded-[10px] bg-[#fff]' style={{boxShadow:"1px 1px .3rem #aeaeae"}}>
                    <FaBasketShopping className='homeIcon' fontSize={20}/>
                    </div>
                    <p className='text-[#344767] font-[500] cursor-pointer m-[0]' >Booking</p>
                </div>
            </Drawer>
        </>
    );
};
export default DrawerPrimary;
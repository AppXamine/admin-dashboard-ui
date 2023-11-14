import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiFillBell, AiFillHome, AiFillSetting } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { Button } from '@nextui-org/react'
import DrawerPrimary from '../Darwer'

function Navbar() {
    return (
        <div className='w-full h-auto max-w-[1200px] flex justify-between items-center p-[10px] mt-[10px] mb-[10px] mr-auto ml-auto '>
            <div className='w-full max-w-[350px] h-auto  ml-[10px] flex justify-between items-center' >
                <div className='w-full max-w-[300px] h-auto '>
                    <div className='w-fit h-fit flex  justify-center items-center'>
                        <div className='w-fit    h-fit m-[2px] cursor-pointer'><AiFillHome fill='#96a0b1' size={15} /></div>
                        <div className='w-fit text-[#96a0b1] h-fit m-[2px] text-[12px] '>/</div>
                        <div className='w-fit text-[#96a0b1] h-auto m-[2px] cursor-pointer '><p className='m-0 text-[12px] font-semibold text-[#96a0b1]'>Dashboards</p></div>
                        <div className='w-fit text-[#96a0b1] h-fit m-[2px] text-[12px] '>/</div>
                        <div className='w-fit text-[#96a0b1] h-fit m-[2px] cursor-pointer'><p className='m-0 text-[12px] font-semibold text-[#96a0b1]'>Default</p></div>
                    </div>
                    <div className='w-full h-auto '>
                        <h2 className='font-semibold tracking-[-0.025em] text-[#344767] ml-[10px]'> Default</h2>
                    </div>

                </div>
               <DrawerPrimary/>
            </div>
            <div className='w-full max-w-[400px] h-auto  flex justify-between mr-[10px]'>
                <div className='w-full max-w-[230px] h-10 flex items-center border rounded-[4px] border-[#96a0b1]'>
                    <div className='w-[40px] h-full flex justify-center items-center cursor-pointer font-bold '><BiSearchAlt2 style={{ fontWeight: 'bold' }} fill='#344767' size={20} /></div>
                    <div className='w-full max-w-[190px] h-full flex justify-center items-center '>
                        <input type="text" placeholder='Type Here...' className='text-[#344767] text-[14px] outline-none border-none bg-transparent' />
                    </div>
                </div>
                <div className='w-full max-w-[160px] h-10 flex justify-between items-center'>
                    <div className='w-fit h-fit'> <Button radius='sm' className='w-[100px] font-semibold h-[30px] bg-transparent border rounded-[4px] p-[0px] border-[#344767] text-[#344767] pl-[5px]' ><BsPersonCircle fill='#344767' /> Sign In</Button></div>
                    <div className='w-[60px] h-10 flex justify-between items-center '>
                        <div className='w-[20px] ml-[3px] h-[20px] cursor-pointer  flex justify-center items-center'><AiFillSetting size={17} fill='#344767' /></div>
                        <div className='w-[20px] mr-[3px] h-[20px] cursor-pointer  flex justify-center items-center'><AiFillBell fill='#344767' size={17} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
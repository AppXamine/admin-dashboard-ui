import "./style.css"
import React from 'react'
import { AiFillBell, AiFillSetting } from "react-icons/ai"
import { BiSearchAlt2 } from "react-icons/bi"
import DrawerPrimary from '../Darwer'
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { auth, signOut } from "../../config/Firebase"

function Navbar() {
    const navigate = useNavigate()
    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            navigate("/")
        }).catch((error) => {
            console.log("Logout Error =>", error)
        });
    }

    return (
        <div className='navContainer'>
            <div className='w-full max-w-[350px] h-auto  ml-[10px] flex justify-between items-center' >
                <DrawerPrimary />
                <div className='w-full max-w-[300px] h-auto '>
                    <div className='w-fit h-fit flex  justify-center items-center'>
                    </div>
                    <div className='logoContainer'>
                        <h2 > Karwan-e-Asra</h2>
                        <p>International Pvt Ltd</p>
                    </div>

                </div>
            </div>
            <div className='logout'>
                <Button
                    onClick={handleLogout}
                    className="logoutBtn">
                    <p>Log Out</p>
                </Button>
            </div>
        </div>
    )
}

export default Navbar
import "./styles.css";
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdMenuOpen,MdMenu } from "react-icons/md";

import React, { useEffect, useState } from "react";
import { Drawer } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";
import { FaNoteSticky } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";

const SideMainItems = [
    {
        id: "dashboard",
        icon: < MdDashboard className='homeIcon' fontSize={20} />,
        routeName: "/admin/dashboard",

    },
    {
        id: "gallery",
        icon: < LuGalleryHorizontalEnd className='homeIcon' fontSize={20} />,
        routeName: "/admin/gallery"
    },
    {
        id: "certificate",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        routeName: "/admin/certificate"
    },
    {
        id: "notice",
        icon: < FaNoteSticky className='homeIcon' fontSize={20} />,
        routeName: "/admin/notice"
    },
]


const SidePAckagesItems = [
    {
        id: "hajj",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        name: "Hajj",
        routeName: "/admin/package/hajj"
    },
    {
        id: "umrah",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        name: "Umrah",
        routeName: "/admin/package/umrah"
    },
    {
        id: "ziyarat",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        name: 'Ziyarat',
        routeName: "/admin/package/ziyarat"
    },
    {
        id: "airline",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        name: "Air Line Tickets",
        routeName: "/admin/package/air-line"
    },
    {
        id: "tourisum-plannar",
        icon: < PiCertificateFill className='homeIcon' fontSize={20} />,
        name: "tourisum plannar",
        routeName: "/admin/package/tourisum-plannar"
    },
]

const DrawerPrimary = () => {
    const [activeRoute, setActiveRoute] = useState("/admin/dashboard")
    const location = useLocation().pathname

    useEffect(()=>{
        setActiveRoute(location)
    },[location])

    const handlerRoute = (arg) => {
        setActiveRoute(arg)
        console.log("arg => ", arg)
    }

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(prev => !prev);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div onClick={showDrawer} className='navMenu'>
                {
                    open?(<MdMenuOpen fill='#fff' size={25} />):(<MdMenu fill='#fff' size={25} />)
                }
                
            </div>
            <Drawer
                closable={false}
                styles={{ body: { backgroundColor: "#f8f9fa" } }}
                className="drawerwidth"
                placement="left"
                open={open}
            >
                <div className="drawerHeader">
                    <div className="flex items-center">
                        <div className="drawerlogoContainer">
                            <div className="drawerlogo"
                            onClick={showDrawer}
                            >
                                <img src="https://karwan-e-asra.com.pk/static/media/logo.9aa792d569625744d04a.png" />
                            </div>
                            <h1>karwan-e-asra</h1>
                        </div>
                    </div>
                </div>

                {SideMainItems.map((value, index) =>
                    <NavLink
                        onClick={
                            () => handlerRoute(value.routeName)
                        }
                        to={value.routeName}
                        key={index}>
                        <div
                            className={`listItems ${activeRoute === value.routeName && "sideActive"}`}

                        >
                            <div >
                                {value.icon}
                            </div>
                            <p>{value.id}</p>
                        </div>
                    </NavLink>)}

                <div className="sideBarHeading">
                    <h1 >Packages</h1>
                </div>

                {SidePAckagesItems.map((value, index) =>
                    <NavLink
                        to={value.routeName}
                        key={index}>
                        <div
                            className={`listItems ${activeRoute === value.routeName && "sideActive"}`}
                            onClick={
                                () => handlerRoute(value.routeName)
                            }
                        >
                            <div >
                                {value.icon}
                            </div>
                            <p>{value.name}</p>
                        </div>
                    </NavLink>)}
            </Drawer>
        </>
    );
};
export default DrawerPrimary;
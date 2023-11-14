import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { GiHamburgerMenu } from 'react-icons/gi';
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
            <Drawer title="Basic Drawer" placement="left" onClose={onClose} open={open}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default DrawerPrimary;
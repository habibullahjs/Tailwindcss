import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import Container from './Container'

// import here 

const Menu = () => {
    let [show, setShow] = useState(false);
    let autoShow = function(){
        setShow(!show)
    }
    return (
        <div className='bg-menuColor py-7 items-center'>
            <Container>
                <div className="flex">
                    <div className="w-4/12">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="w-8/12">
                        <ul className='flex justify-end'>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize' href="#">home</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize' href="#">About</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize' href="#">Services</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize' href="#">Gallery</a></li>
                            <li><a className='px-7 pr-19 text-white font-popins font-semibold capitalize' href="#">Blog</a></li>
                            <li><a className='px-5 border-2 border-white py-3 text-white font-popins font-semibold' href="#">CONTACT</a></li>
                        </ul>
                    </div>
                    <div className="lg:hidden" onClick={autoShow}>
                        {show ? <RxCross1 /> : <IoMenu />}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menu
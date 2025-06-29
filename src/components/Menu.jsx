import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

import Container from './Container'

// import here 

const Menu = () => {
    let [show, setShow] = useState(false);
    let autoShow = function () {
        setShow(!show)
    }
    return (
        <div className='bg-menuColor py-7'>
            <Container>
                <div className="flex items-center px-3 lg:px-6 text-center">
                    <div className="w-4/12">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="w-8/12">
                        <ul className={`lg:flex justify-end lg:static z-[1000] lg:py-0 py-2 ${show == true ?
                                'bg-headerColor absolute left-0 top-[174px] duration-500 ease-in-out w-full' :
                                'absolute left-0 top-[174px] opacity-0 lg:opacity-100 duration-500 ease-in-out w-full'
                                // 'bg-[green] absolute left-0 top-[174px] w-full' :
                                // 'bg-[gray] absolute left-[-380px] top-[174px] w-full'
                            }`}>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize py-3.5 inline-block' href="#">home</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize py-3.5 inline-block' href="#">About</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize py-3.5 inline-block' href="#">Services</a></li>
                            <li><a className='px-4 text-white font-popins font-semibold capitalize py-3.5 inline-block' href="#">Gallery</a></li>
                            <li><a className='px-7 text-white font-popins font-semibold capitalize py-3.5 inline-block' href="#">Blog</a></li>
                            <li><a className='px-5 border-2 border-white py-3 text-white font-popins font-semibold inline-block' href="#">CONTACT</a></li>
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
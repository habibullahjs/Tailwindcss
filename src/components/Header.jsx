import React from 'react'
import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Container from './Container'


const Header = () => (
    <header className="bg-headerColor py-2">
        <Container>
            <div className="lg:flex items-center px-6">
                <div className="w-full lg:w-3/12">
                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                        <MdOutlineMailLock className='text-white' />
                        <p className='text-white font-popins font-normal text-[12px]'>mail@yourcompany.com</p>
                    </div>
                </div>
                <div className="w-full lg:w-3/12 py-3 lg:py-0">
                    <div className="flex items-center gap-2 justify-center">
                        <MdOutlineAddIcCall className='text-white' />
                        <p className='text-white font-popins font-normal text-[12px]'>+896 120 5889 (Toll free)</p>
                    </div>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="flex gap-5 lg:justify-end justify-center">
                        <FaFacebookF className='text-white' />
                        <FaTwitter className='text-white' />
                        <FaLinkedin className='text-white' />
                        <FaInstagramSquare className='text-white' />
                    </div>
                </div>
            </div>
        </Container>
    </header>
)

export default Header
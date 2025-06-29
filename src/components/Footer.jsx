import { MdOutlineMailLock } from "react-icons/md";
import { MdOutlineAddIcCall } from "react-icons/md";
import logoImg from "../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import cart1 from "../assets/Cert1.png"
import cart2 from "../assets/Cert2.png"
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-footbg pt-[50px] lg:pt-[148px] '>
      <Container>
        <div className="px-6 flex">
          <div className="w-3/12">
            <div className="pb-10">
              <img src={logoImg} alt="" />
            </div>

            <div className="text-white">
              <div className="flex items-center gap-2 pb-2">
                <MdOutlineMailLock />
                <p className="lg:text-[14px] text-[8px]">mail@yourcompany.com</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <MdOutlineAddIcCall />
                <p className="lg:text-[14px] text-[10px]" > +896 120 5889 (Toll free)</p>
              </div>
              <div className="flex items-center gap-2 pb-10">
                <FaLocationDot />
                <p className="lg:text-[14px] text-[10px]">101 Baker Street, New York, USA, 12345</p>
              </div>
            </div>
            <div className="flex gap-2 text-white">
              <div className="bg-orange-600 p-2 rounded-full">
                <FaFacebookF />
              </div>
              <div className="bg-orange-600 p-2 rounded-full">
                <FaTwitter />
              </div>
              <div className="bg-orange-600 p-2 rounded-full">
                <FaLinkedin />
              </div>
              <div className="bg-orange-600 p-2 rounded-full">
                <FaInstagramSquare />
              </div>
            </div>
          </div>

          <div className="w-3/12 text-center">
            <div className="pb-10">
              <h3 className="text-white text-[12px] lg:text-[16px] font-bold font-popins">Company</h3>
            </div>
            <div className=" text-white ">
              <ul>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Home</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">About</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Services</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Gallery</a></li>
              </ul>
            </div>

          </div>
          <div className="w-3/12">
            <div className="pb-10">
              <h3 className="text-white lg:text-[16px] text-[12px] font-bold font-popins">Others</h3>
            </div>
            <div className=" text-white">
              <ul>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Blog</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Contact</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Terms & Conditions</a></li>
                <li className="pb-2 font-popins font-normal lg:text-[14px] text-[10px]"><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="w-3/12">
            <div className="pb-10">
              <h3 className="text-white lg:text-[16px] text-[12px] font-bold font-popins">Certificate</h3>
            </div>
            <div className="flex gap-1">
              <div className=""> 
                <img src={cart1} alt="" />
              </div>
              <div className="">
                <img src={cart2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>


      <div className=" pt-[40px] lg:pt-[170px]">
        <div className="lg:py-6 py-3 bg-copyright">
          <Container>
            <p className="ml-6 lg:text-[16px] text-[12px]">© Copyright 2022 by AltDesain Studio – All right reserved.</p>
          </Container>
        </div>
      </div>

    </div>
  )
}

export default Footer
import React from 'react'
import bannerImg from "../assets/banner.png";
import Container from './Container';

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat lg:py-70 py-[80px] relative z-[1] after:absolute after: left-0 after:top-0 after:content-[''] after:h-[100%] after:w-full after:bg-[#00000037] after:z-[-1] "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <div className="text-white px-3 lg:px-6">
          <h1 className="font-poppins font-bold lg:text-[64px] text-[26px] lg:w-[842px] pb-6">
            We exist since 1975 in the oil and gas industry.
          </h1>
          <a className="bg-buttonColor text-white px-6 py-2 hover:bg-red-700" href="#">LEARN MORE</a>
        </div>
      </Container>
    </div>
  )
}

export default Banner
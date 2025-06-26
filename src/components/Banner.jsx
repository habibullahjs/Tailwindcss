import React from 'react'
import bannerImg from "../assets/banner.png";
import Container from './Container';

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat py-80"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <Container>
        <div className="text-white max-w-2xl">
          <h1 className="font-poppins font-bold lg:text-[64px] lg:text-5xl py-9">
            We exist since 1975 in the oil and gas industry.
          </h1>
          <button className="bg-buttonColor text-white px-6 py-2 hover:bg-red-700">
            LEARN MORE
          </button>
        </div>
      </Container>
    </div>
  )
}

export default Banner
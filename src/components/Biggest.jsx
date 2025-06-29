import React from 'react'
import Container from './Container'

const Biggest = () => {
    return (
        <div className="py-[50px]">
            <Container>
                <div className="flex flex-wrap text-center lg:text-start items-center">
                    <div className="lg:w-5/12 w-full">
                        <h3 className='lg:text-[48px] text-[20px] font-bold font-popins px-6'>The biggest
                            supplier on
                            the country</h3>
                    </div>
                    <div className="lg:w-7/12">
                        <p className='font-popins  lg:text-[16px] text-[12px] font-[500] px-6 text-biggest'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default Biggest
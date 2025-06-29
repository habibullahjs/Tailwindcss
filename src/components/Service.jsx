import service1 from "../assets/Services1.png"
import service2 from "../assets/services2.png"
import service3 from "../assets/services3.png"

const Service = () => {
    return (
        <section>
            <div className="lg:flex flex-wrap justify-between lg:mt-6 mt-19">
                <div className="lg:w-[50%] w-full  h-[210px] text-center">
                    <h2 className=' font-bold lg:text-[64px] mt-[80px] text-[40px] font-popins'>Our Services</h2>
                    <p className='font-[500] lg:text-start lg:text-[16px] font-popins lg:px-2 lg:pr-[260px] lg:pl-[280px] text-biggest'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="lg:w-[50%] w-full lg:h-[410px] h-[210px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${service1}` }}>
                    <h3 className="text-white lg:text-[36px] text-center pt-20 font-bold font-popins lg:ml-[116px] lg:mt-[80px] pb-6">Modern natural oil and gas refineries.</h3>
                    <a className="bg-buttonColor text-white text-center px-6 py-2 hover:bg-red-700  block mx-auto w-fit" href="#">
                        Learn more
                    </a>
                </div>
                <div className="lg:w-[50%] w-full lg:h-[410px] h-[210px] lg:py-[134px] bg-center bg-cover bg-no-repeat " style={{ backgroundImage: `url(${service2})` }}>
                    <h3 className="text-white lg:text-[36px] text-center pt-20 font-bold font-popins lg:ml-[116px] pb-6 lg:mt-6">Modern natural oil and gas refineries.</h3>
                    <a className="bg-buttonColor text-white px-6 py-2 hover:bg-red-700 block mx-auto w-fit text-center" href="#">
                        Learn more
                    </a>
                </div>
                <div className="lg:w-[50%] w-full lg:h-[410px] h-[210px] lg:py-[134px] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${service3})` }}>
                    <h3 className="text-white lg:text-[36px] font-bold font-popins text-center pt-20 lg:ml-[116px] pb-6 lg:mt-6">Modern natural oil and gas refineries.</h3>
                    <a className="bg-buttonColor text-white px-6 py-2 hover:bg-red-700 block mx-auto w-fit" href="#">
                        Learn more
                    </a>
                </div>
            </div>
        </section >
    )
}

export default Service
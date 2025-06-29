import mapsImg from "../assets/maps.png"
import Container from "./Container"

const Maps = () => {
    return (
        <div>
            <div className=" h-[130px] lg:h-[300px] bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${mapsImg})`}}>
                {/* <img src={mapsImg} alt="" /> */}
            </div>
            <div className="bg-red-600 border-b lg:pb-0 pb-1 border-amber-400">
                <Container>
                    <div className=" lg:flex flex-wrap   lg:py-[35px]">
                        <div className= " w-full lg:w-8/12">
                        <h3 className= " ml-8 lg:text-start lg:pb-0 pb-5 text-center font-popins font-bold text-[20px] lg:text-[27px] text-white">Want to join as member branch in your area?</h3>
                        </div>
                        <div className= " w-full lg:w-4/12">
                        <a className= "py-[13px] px-[32px]  text-center mx-auto border-1 border-white block w-fit text-white " href="#">CONTACT</a>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}

export default Maps
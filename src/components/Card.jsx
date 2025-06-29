import group1 from "../assets/group 1.png"
import group2 from "../assets/group 2.png"
import group3 from "../assets/group 3.png"
import Container from './Container'

const Card = () => {
    return (
        <div className=' items-center pt-[50px] pb-[60px] lg:pt-[100px] lg:pb-[160px] lg:py-[170px] px-6 bg-companyBg'>

            <Container>
                <div className=" flex-wrap lg:flex items-center justify-center gap-[40px]">
                    <div className=" w-full  lg:w-[29%] h-[401px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${group1})`}}>
                        <p className=" text-white font-popins font-bold text-[27px] pt-[75px] pl-[46px] pb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <a className="bg-cardbtn py-[10px] px-[22px] ml-[46px] block w-fit text-center text-white font-popins font-[600]" href="#">Read more</a>

                    </div>
                    <div className=" w-full lg:mt-0 mt-8 lg:w-[29%] h-[401px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${group2})`}}>
                        <p className=" text-white font-popins font-bold text-[27px] pt-[75px] pl-[46px] pb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <a className="bg-cardbtn py-[10px] px-[22px] ml-[46px] block w-fit text-center text-white font-popins font-[600]" href="#">Read more</a>
                    </div>
                    <div className=" w-full lg:mt-0 mt-8 lg:w-[29%] h-[401px] bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${group3})`}}>
                        <p className=" text-white font-popins font-bold text-[27px] pt-[75px] pl-[46px] pb-[52px]">lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
                        <a className="bg-cardbtn py-[10px] px-[22px] ml-[46px] block w-fit text-center text-white font-popins font-[600]" href="#">Read more</a>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Card
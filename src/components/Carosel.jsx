import caroselImg from "../assets/carosel.png"
import Container from './Container'

const Carosel = () => {
  return (
    <div>
        <Container>
            <div className=" py-[50px] lg:py-[117px] px-6">
                <div className="">
                    <img src={caroselImg} alt="carosel" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Carosel
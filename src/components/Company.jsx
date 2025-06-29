import companyBg from "../assets/company.png"
import Container from './Container'

const Company = () => {
    return (
        <section>
            <div className='bg-companyBg py-[50px] lg:py-[136px]'>
                <Container>
                    <div className="px-6 flex flex-wrap items-center">
                        <div className="lg:w-3/12 w-full h-[361px] bg-red-600">
                            <h3 className='text-center font-bold text-[36px] pt-[100px] text-white'>Learn more about our company</h3>
                        </div>
                        <div className="lg:w-9/12 w-full h-[361px] bg-blue-500 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${companyBg})`  }}>
                        <div className="flex justify-center">
                            <a className="bg-white px-6 py-2 block w-fit mt-[168px]  hover:bg-amber-100 text-red-600" href="#">Learn more</a>
                        </div>
                        </div>
                    </div>
                </Container>

            </div>
        </section>
    )
}

export default Company
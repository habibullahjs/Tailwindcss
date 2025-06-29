import galImge1 from "../assets/gal1.png"
import galImge2 from "../assets/gal2.png"
import galImge3 from "../assets/gal3.png"
import galImge4 from "../assets/gal4.png"
const Gallery = () => {
  return (
   <section>
    <div className="flex flex-wrap justify-between">
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge1} alt="gal1" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge2} alt="gal2" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge3} alt="gal3" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge4} alt="gal4" />
        </div>
        </div>
    </div>
   </section>
  )
}

export default Gallery
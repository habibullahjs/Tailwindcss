import galImge1 from "../assets/gal-1.png"
import galImge2 from "../assets/gal-2.png"
import galImge3 from "../assets/gal-3.png"
import galImge4 from "../assets/gal-4.png"
const Gallery = () => {
  return (
   <section>
    <div className="flex flex-wrap justify-between">
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge1} alt="gal-1" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge2} alt="gal-1" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge3} alt="gal-1" />
        </div>
        </div>
        <div className="w-[49%] lg:w-[24%] mt-2">
        <div className="">
            <img src={galImge4} alt="gal-1" />
        </div>
        </div>
    </div>
   </section>
  )
}

export default Gallery
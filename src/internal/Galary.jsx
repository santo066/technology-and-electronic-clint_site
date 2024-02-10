
import Marquee from "react-fast-marquee";
import img10 from "../../public/img10.jpg"
import img11 from "../../public/img11.jpg"
import img12 from "../../public/img12.png"
import img13 from "../../public/img13.jpg"
import img14 from "../../public/img14.jpg"
import img15 from "../../public/img15.jpg"
import img16 from "../../public/img16.jpg"
export default function Galary(){
    return(
        <div className="mb-20 w-full">

            <Marquee speed={200} direction="left">
                <img src={img10} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img11} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img12} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img13} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img14} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img15} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
                <img src={img16} className="h-64 w-96 ml-5 shadow-2xl" alt="" />
            </Marquee>

        </div>
    )
}
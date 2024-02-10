import img30 from "../../public/img30.jpg"
import img31 from "../../public/img31.jpg"
import img32 from "../../public/img32.jpg"
import img33 from "../../public/img33.jpg"
import img34 from "../../public/img34.jpg"
export default function Hotitems() {
    return (
        <div className="">
            <h1 className=" text-3xl font-extrabold mb-4 text-center">Hot Items</h1>
            <div className=" carousel h-44 w-full">
                <div id="item1" className="carousel-item w-full">
                    <img  src={img30} className="w-full  bg-cover" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img31} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img32} className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img33} className="w-full" />
                </div>
                <div id="item5" className="carousel-item w-full">
                    <img src={img34} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
            </div>
        </div>
    )
}
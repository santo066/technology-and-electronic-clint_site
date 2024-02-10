import { Link } from "react-router-dom"
import img23 from "../../../public/img23.png"
import img24 from "../../../public/img24.png"
import img25 from "../../../public/img25.png"
import img26 from "../../../public/img26.png"
import img27 from "../../../public/img27.png"
import img28 from "../../../public/img28.png"
export default function CategorisCard() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-10 mb-32">
            {/* card 1 */}
            <div className="card w-96 h-80 hover:shadow-lg bg-base-100 ">

                <div className="mx-auto">
                    <img src={img28} alt="Shoes" className="rounded-xl w-36 h-36" />
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Apple</h2>
                    <p>welcome to apple</p>
                    <div className="card-actions">
                        <Link to={'/apple'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
            {/* card 2 */}
            <div className="card w-96  hover:shadow-lg h-80 bg-base-100 ">
                <figure className="">
                    <img src={img27} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Vivo</h2>
                    <p className="mb-2">welcome to vivo</p>
                    <div className="card-actions">
                        <Link to={'/vivo'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
            {/* card 3 */}
            <div className="card w-96  hover:shadow-lg h-80 bg-base-100 ">
                <figure className=" pt-8">
                    <img src={img26} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title mt-9">Sony</h2>
                    <p>welcome to sony</p>
                    <div className="card-actions">
                    <Link to={'/sony'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
            {/* card 4 */}
            <div className="card w-96 mt-5 hover:shadow-lg h-80 bg-base-100 ">

                <div className="mt-5">
                    <img src={img25} alt="Shoes" className="rounded-xl " />
                </div>

                <div className="card-body  items-center text-center">
                    <h2 className="card-title ">Sansung</h2>
                    <p>welcome to Sansung</p>
                    <div className="card-actions">
                    <Link to={'/samsung'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
            {/* card 5 */}
            <div className="card w-96 mt-5 hover:shadow-lg h-80 bg-base-100 ">

                <div className="mt-5">
                    <img src={img24} alt="Shoes" className="rounded-xl " />
                </div>

                <div className="card-body mt-3 items-center text-center">
                    <h2 className="card-title mt-5">Oppo</h2>
                    <p>welcome to oppo</p>
                    <div className="card-actions">
                    <Link to={'/oppo'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
            {/* card 6 */}
            <div className="card w-96 mt-5 hover:shadow-lg h-80 bg-base-100 ">

                <div className="">
                    <img src={img23} alt="Shoes" className="rounded-xl w-[300px] mx-auto" />
                </div>

                <div className="card-body  items-center text-center">
                    <h2 className="card-title ">Onplus</h2>
                    <p className="">welcome to onplus</p>
                    <div className="card-actions mb-10">
                    <Link to={'/onplus'}><button className="btn btn-primary">View All</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
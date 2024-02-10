import { Link, useLoaderData } from "react-router-dom"
import Banar from "../../internal/Banar"

export default function ViewAllCard() {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <div className="mb-20">
                <Banar></Banar>
            </div>
            <div className="grid ml-20 md:grid-cols-3 gap-5">
                {
                    phones.map(phone =>
                        <div key={phone._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                            <figure><img src={phone.image} className="h-[150px]" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{phone.name}</h2>
                                <p>{phone.description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/detels/${phone._id}`}><button className="btn btn-primary">View</button></Link>
                                    <Link to={`/update/${phone._id}`}><button className="btn btn-primary">Update</button></Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
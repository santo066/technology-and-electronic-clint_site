import { Link, useLoaderData } from "react-router-dom"

export default function Oppo(){

    const products =useLoaderData()

    const oppos=products.filter(product=>product.brand == "oppo")

   

    return (
        <div className="grid md:grid-cols-3 gap-5 my-20 ml-20">
            {
                oppos.map(oppo=>
                    <div key={oppo._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={oppo.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{oppo.name}</h2>
                            <p>{oppo.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${oppo._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${oppo._id}`}><button className="btn btn-primary">Update</button></Link>

                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}
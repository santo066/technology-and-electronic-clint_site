import { Link, useLoaderData } from "react-router-dom"

export default function Samsung(){
   
    const products =useLoaderData()
    const samsungs=products.filter(product=>product.brand == "samsung")

    return (
        <div className="grid md:grid-cols-3 gap-5 my-20 ml-20">
            {
                samsungs.map(samsung=>
                    <div key={samsung._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={samsung.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{samsung.name}</h2>
                            <p>{samsung.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${samsung._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${samsung._id}`}><button className="btn btn-primary">Update</button></Link>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    )
}
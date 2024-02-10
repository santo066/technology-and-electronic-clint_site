import { Link, useLoaderData } from "react-router-dom"

export default function Onplus() {
    const products = useLoaderData()
    const onpluss = products.filter(product => product.brand == "onplus")

    return (
        <div  className="grid md:grid-cols-3 gap-5 my-20 ml-20">
            
            {
                onpluss.map(onplus =>
                    <div key={onplus._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={onplus.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{onplus.name}</h2>
                            <p>{onplus.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${onplus._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${onplus._id}`}><button className="btn btn-primary">Update</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
import { Link, useLoaderData } from "react-router-dom"

export default function Sony() {

    const products = useLoaderData()
    const sonys = products.filter(product => product.brand == "sony")

    return (
        <div className="grid md:grid-cols-3 gap-5 my-20 ml-20">
            {
                sonys.map(sony =>
                    <div key={sony._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={sony.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{sony.name}</h2>
                            <p>{sony.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${sony._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${sony._id}`}><button className="btn btn-primary">Update</button></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
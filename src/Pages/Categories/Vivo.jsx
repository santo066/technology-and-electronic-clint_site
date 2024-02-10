import { Link, useLoaderData } from "react-router-dom"

export default function Vivo() {
    const products = useLoaderData()

    const vivos = products.filter(product => product.brand == "vivo")

    return (
        <div className="grid md:grid-cols-3 gap-5 my-20 ml-20">
           
            {
                vivos.map(vivo =>
                    <div key={vivo._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={vivo.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{vivo.name}</h2>
                            <p>{vivo.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${vivo._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${vivo._id}`}><button className="btn btn-primary">Update</button></Link>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
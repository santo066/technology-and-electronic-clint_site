import { Link, useLoaderData } from "react-router-dom"
import ViewAllCard from "./ViewAllCard"

export default function Apple() {
    const products = useLoaderData()
    console.log(products)
    const apple = products.filter(product => product.brand == 'apple')
    console.log(apple)

    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5 my-20 ml-20">
                {/* {
                    apple.map(app=><ViewAllCard key={app._id} apple={app}></ViewAllCard>)
                } */}
                {
                    apple.map(app => <div key={app._id} className="card w-96 h-[400px] bg-base-100 shadow-xl">
                        <figure><img src={app.image} className="h-[150px]" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{app.name}</h2>
                            <p>{app.description}</p>
                            <div className="card-actions justify-end">
                                <Link to={`/detels/${app._id}`}><button className="btn btn-primary">View</button></Link>
                                <Link to={`/update/${app._id}`}><button className="btn btn-primary">Update</button></Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
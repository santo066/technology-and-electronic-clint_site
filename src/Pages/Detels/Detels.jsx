import { useLoaderData } from "react-router-dom"

export default function Detels() {
    const phones = useLoaderData()
    const { name, price, description, ratting, brand, image, type } = phones;
    return (
        <div className="hero my-20 min-h-screen bg-sky-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="max-w-[600PX] rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <h4 className="text-2xl mt-3 font-bold">{price} BDT</h4>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary">Add to cut</button>
                </div>
            </div>
        </div>
    )
}
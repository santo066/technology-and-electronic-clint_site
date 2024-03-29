export default function Addproduct() {

    const hendelAddProducts = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const image = form.image.value;
        const ratting = form.ratting.value;
        const products = { name, brand, type, price, description, image, ratting };
        console.log(products)

        fetch('https://technology-and-electronics-server-ashen.vercel.app/products',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(products)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


    return (
        <div>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-blue-700"> Add Products</span></h2>
                <form onSubmit={hendelAddProducts} className="card-body  md:w-3/4 bg-slate-500 bg-opacity-50 border-double border-8 border-slate-800 rounded-tl-[200px] rounded-br-[200px] mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Brand Name</span>
                        </label>
                        <input type="text" name="brand" placeholder="brand name" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Type</span>
                        </label>
                        <input type="text" name="type" placeholder="type" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Price</span>
                        </label>
                        <input type="number" name="price" placeholder="price" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Image Url</span>
                        </label>
                        <input type="text" name="image" placeholder="image" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white mx-28">Ratting</span>
                        </label>
                        <input type="text" name="ratting" placeholder="Ratting" className="input w-[500px] mx-auto input-bordered" required />

                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl bg-blue-200 hover:bg-blue-400 text-white">Add Products</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
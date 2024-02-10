import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";

export default function Register() {
    const { createUser } = useContext(AuthContex)

    const hendelcreateuser = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const password = form.password.value;

        createUser(email, password)

            .then(result => {
                console.log(result)
                //user collection
                const user = { name, email, phone }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        form.reset()
                        if(data.insertedId)
                        {
                            alert('user created success fully')
                        }
                    })
            })

            .catch(error => [
                console.log(error)
            ])
    }

    return (
        <div>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-blue-700"> Register</span></h2>
                <form onSubmit={hendelcreateuser} className="card-body  md:w-3/4 bg-slate-500 bg-opacity-50 border-double border-8 border-slate-800 rounded-tl-[200px] rounded-br-[200px] mx-auto lg:w-2/4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Phone</span>
                        </label>
                        <input type="number" name="phone" placeholder="phone" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white passwordext-white mx-28">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input w-[500px] mx-auto input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white mx-28">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input w-[500px] mx-auto input-bordered" required />

                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl    bg-blue-200 hover:bg-blue-400 text-white">Register</button>

                    </div>
                    <p className="text-center text-white">You have an acount please <Link className="text-blue-700 font-bold " to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    )
}
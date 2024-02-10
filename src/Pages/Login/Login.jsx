import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../AuthProvider/AuthProvider";

export default function Login() {
    const { signin } = useContext(AuthContex)
    const location = useLocation();
    console.log(location)
    const navigate = useNavigate();
    const hendelsignin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signin(email, password)
            .then(result => {
                console.log(result)
                navigate(location?.state ? location.state : '/')
                const user = {
                    email,
                    lastlogin: result.user?.metadata?.lastSignInTime
                }
                fetch('https://technology-and-electronics-server-ashen.vercel.app/users',{
                    method:'PATCH',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="my-9">
                <h2 className="text-4xl  text-center mb-7 font-extrabold">Please <span className="text-blue-700"> Login</span></h2>
                <form onSubmit={hendelsignin} className="card-body rounded-tl-[200px] rounded-br-[200px] md:w-3/4 bg-slate-500 bg-opacity-50 border-double border-8 border-slate-800  mx-auto lg:w-2/4">
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
                        <label className="label">
                            <a href="#" className="label-text-alt link text-white mx-auto mt-3 text-sm link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-2">
                        <button className=" h-10 w-48 mx-auto btn text-xl    bg-blue-200 hover:bg-blue-400 text-white">Login</button>

                    </div>
                    <p className="text-center text-white">You do not have an acount please <Link className="text-blue-700 font-bold " to={'/register'}>Register</Link></p>
                </form>
            </div>
        </div>
    )
}
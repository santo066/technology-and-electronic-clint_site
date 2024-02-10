import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { AuthContex } from "../AuthProvider/AuthProvider"

export default function Header() {
    const { logout, users } = useContext(AuthContex)
    const hendelSignout = () => {
        logout()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <NavLink className={'mr-3'} to={'/'}><li>Home</li></NavLink>
        <NavLink className={'mr-3'} to={'/addproduct'}><li>Addproduct</li></NavLink>
        <a className={'mr-3'} href="#product">Product</a>
        <NavLink className={'mr-3'} to={'/allphones'}><li>All_Phones</li></NavLink>
        <NavLink className={'mr-3'} to={'/users'}><li>All_Users</li></NavLink>
        <NavLink className={'mr-3'} to={'/register'}><li>Register</li></NavLink>
        <NavLink className={'mr-3'} to={'/login'}><li>Login</li></NavLink>
    </>
    return (
        <div className=" text-white mb-4">
            <div className="navbar bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content font-bold mt-3 text-sm z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl">technology</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold text-sm px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        users ?
                            <button onClick={hendelSignout} className="btn btn-primary">Log out</button>
                            :
                            <button className="btn btn-primary"><Link to={'/login'}>Login</Link></button>


                    }
                </div>
            </div>
        </div>
    )
}
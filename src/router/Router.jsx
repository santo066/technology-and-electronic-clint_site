import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Addproduct from "../Pages/Addproduct/Addproduct";
import PrivateRouter from "./PrivateRouter";
import Apple from "../Pages/Categories/Apple";
import Oppo from "../Pages/Categories/Oppo";
import Vivo from "../Pages/Categories/Vivo";
import Onplus from "../Pages/Categories/Onplus";
import Samsung from "../Pages/Categories/Samsung";
import Sony from "../Pages/Categories/Sony";
import Update from "../Pages/Update/Update";
import Detels from "../Pages/Detels/Detels";
import ViewAllCard from "../Pages/Categories/ViewAllCard";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addproduct',
                element: <PrivateRouter><Addproduct></Addproduct></PrivateRouter>
            },
            {
                path:'/allphones',
                element:<ViewAllCard></ViewAllCard>,
                loader:()=>fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/oppo',
                element: <Oppo></Oppo>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/vivo',
                element: <Vivo></Vivo>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/onplus',
                element: <Onplus></Onplus>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path: '/sony',
                element: <Sony></Sony>,
                loader: () => fetch('https://technology-and-electronics-server-ashen.vercel.app/products')
            },
            {
                path:'/update/:id',
                element:<Update></Update>,
                loader:({params})=>fetch(`https://technology-and-electronics-server-ashen.vercel.app/products/${params.id}`)
            },
            {
                path:'/detels/:id',
                element:<PrivateRouter><Detels></Detels></PrivateRouter>,
                loader:({params})=>fetch(`https://technology-and-electronics-server-ashen.vercel.app/products/${params.id}`)
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader:()=>fetch('https://technology-and-electronics-server-ashen.vercel.app/users')
            },

            
        ]
    }
])
export default router;
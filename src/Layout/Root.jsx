import { Outlet } from "react-router-dom";
import Header from "../internal/Header";
import Footer from "../internal/Footer";
import Banar from "../internal/Banar";

export default function Root(){
    return(
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
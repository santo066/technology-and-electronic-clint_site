import { useLoaderData } from "react-router-dom";
import Banar from "../../internal/Banar";
import Galary from "../../internal/Galary";
import CategorisCard from "../Addcategories/CategorisCard";
import Hotitems from "../../internal/Hotitems";

export default function Home() {
    const categories = useLoaderData()
    return (
        <div>
            <div className="">
                <Banar></Banar>
            </div>
            <div className="my-10 mx-20 ">
                <Hotitems></Hotitems>
            </div>
            

            <div id="product" className="mx-7 ml-24" >
                <h2 className="text-5xl my-7 font-extrabold  text-center">Categories</h2>
                <CategorisCard></CategorisCard>
            </div>

            <div className="my-8 w-full">
                <Galary></Galary>
            </div>

        </div>
    )
}
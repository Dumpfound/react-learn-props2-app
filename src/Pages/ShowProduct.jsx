import Product from "../components/Product"
import Hero from "./../assets/hero.png"
import {FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function ShowProduct() {
    return (
        <div>
            <h2 className="text-center text-4xl font-bold font-kanit text-pink-500 mt-10">
                แสดงข้อมูลสินค้า Show Product
            </h2>

            <p className="text-pink-500 text-4xl flex justify-center mt-5">
                <FaFacebook className="text-blue-700 text-4xl" />
                <FaGoogle className="text-orange-600 text-4xl" />
            </p>
            <hr className="mt-10 mb-10 w-[80%] mx-auto h-2 bg-pink-800 border-none" />

            <div>
                <Product pName="iPhone" pPrice={59000} pQuan={100} pImg={Hero} />

                <Product pName="Samsung" pPrice={57000} pQuan={50} pImg={Hero} />

                <Product pName="Vivo" pPrice={39000} pQuan={55} pImg={Hero} />

                <Product pName="Oppo" pPrice={49000} pQuan={120} pImg={Hero} />
            </div>
        </div>
    )
}

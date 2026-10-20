
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: "bold",
          color: "red",
        }}
      >
        เรียนรู้ React ใน React
      </h2>

      <p className="text-center mt-7.5 text-3xl font-bold text-red-500">
        Prop คือ การส่งข้อมูลจาก Component แม่ไปยัง Component ลูก
      </p>

      <hr className="mt-5 w-[80%] mx-auto h-3 bg-red-500" />

      <div className="mt-10 flex justify-center gap-10">
        <Link
          to="/showProduct"
          className="bg-pink-500 text-white py-5 px-10 rounded-xl font-bold"
        >
          เปิด show product
        </Link>

        <Link
          to="/showPerson"
          className="bg-blue-500 text-white py-5 px-10 rounded-xl font-bold hover:bg-blue-600"
        >
          เปิด show person
        </Link>
      </div>
    </div>
  );
}

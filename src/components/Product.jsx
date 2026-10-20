
export default function Product({ pName, pPrice, pQuan, pImg }) {
  return (
    <>
    <div className="mt-5" border-2 border-red-500
    rounded-lg p-3>
        <img src={pImg} className="w-20 block mx-auto mb-5" />
        <p className="font-bold">ชื่อสินค้า: {pName}</p>
        <p>ราคา: {pPrice}</p>
        <p>จำนวน: {pQuan}</p>
        </div>
    </>
  )
}

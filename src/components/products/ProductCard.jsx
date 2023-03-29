import React from 'react'
import Menu1 from "../../assets/img/menu1.png";
import Menu2 from "../../assets/img/menu2.png";
import Menu3 from "../../assets/img/menu3.png";
const products = [
  {
    name: "Japanese Food",
    img: Menu1,
    price: "$33.00",
    qty: 10
  },
  {
    name: "Healthy Pancakes",
    img: Menu2,
    price: "$20.00",
    qty: 50
  },
  {
    name: "Cheese Burger",
    img: Menu3,
    price: "$50.00",
    qty: 30
  },
 
];
const ProductCard = () => {
  return (
 <>
 {products.map((product,index) =>(
     <div className="product_card">
     <div className="product_info">
         <img src={product.img} alt="" />
         <div className="info_details">
           <p>★★★★★</p>
           <p><b>{product.name}</b></p>
           <p><span className="yellow">{product.price}</span></p>
         </div>
     </div>
 </div>
 ))}
 </>
  )
}

export default ProductCard
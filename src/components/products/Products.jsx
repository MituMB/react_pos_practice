import React from 'react'
import Search from '../search/Search'
import "./Products.scss";
import Menu1 from "../../assets/img/menu1.png";
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="product_content p-3">
        <Search />
       <div className="product_wrap">
          <h2 className="py-3">Special Menu For You</h2>
          <div className="product_list">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
     
     
            {/* <div className="product_card">
                <div className="product_info">
                    <img src={Menu1} alt="" />
                    <div className="info_details">
                      <p>★★★★★</p>
                      <p><b>Japanese food</b></p>
                      <p><span className="yellow">$33.00</span></p>
                    </div>
                </div> */}
            </div>

          </div>
       </div>
        

  )
}

export default Products
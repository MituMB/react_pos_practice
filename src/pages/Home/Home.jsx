import React from 'react'
import Cart from '../../components/cart/Cart'
import Products from '../../components/products/Products'
import Sidebar from '../../components/sidebar/Sidebar'
import "./Home.scss";

const Home = () => {
  return (
    <div className="home_wrap">
        <Products />
        <Cart />
    </div>
  )
}

export default Home
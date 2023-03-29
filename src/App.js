import logo from './logo.svg';
import './App.css';
import Loader from './components/loader/Loader';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Home from './pages/Home/Home';
import { useEffect, useState } from 'react';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Forget from './pages/auth/Forget';
import Reset from './pages/auth/Reset';
import PassChanged from './pages/auth/passChanged';
import Layout from './pages/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard';
import Order from './pages/order/OrderDetails';
import Product from './pages/product/Product';
import Customer from './pages/customer/Customer';
import CartReview from './pages/cartReview/CartReview';
import PlaceOrder from './pages/cartReview/PlaceOrder';
import OrderDetails from './pages/order/OrderDetails';
import ProductAdd from './pages/product/ProductAdd';
import EditProduct from './pages/product/EditProduct';
import EditCustomer from './pages/customer/EditCustomer';
import Notification from './pages/notification/Notification';
import Setting from './pages/setting/Setting';


function App() {

  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false)
    },1000)
  }, [])
  
  return (
    <BrowserRouter>
    {
      loading ? <Loader /> : <>
     <Routes>
       <Route path="/" element={<Login/> } />
       <Route path="/register" element={<Register/> } />
       <Route path="/forgot" element={<Forget/> } />
       <Route path="/reset" element={<Reset/> } />
       <Route path="/passChange" element={<PassChanged/> } />
       <Route path="/home" element={<Layout><Home/></Layout> } />
       <Route path="/dashboard" element={<Layout><Dashboard/></Layout> } />
       <Route path="/order" element={<Layout><Order/></Layout> } />
       <Route path="/product" element={<Layout><Product/></Layout> } />
       <Route path="/customer" element={<Layout><Customer/></Layout> } />
       <Route path="/editCustomer" element={<Layout><EditCustomer/></Layout> } />
       <Route path="/cart_review" element={<Layout><CartReview/></Layout> } />
       <Route path="/place_order" element={<Layout><PlaceOrder/></Layout> } />
       <Route path="/orderDeatils" element={<Layout><OrderDetails/></Layout> } />
       <Route path="/addProduct" element={<Layout><ProductAdd/></Layout> } />
       <Route path="/editProduct" element={<Layout><EditProduct/></Layout> } />
       <Route path="/notification" element={<Layout><Notification/></Layout> } />
       <Route path="/setting" element={<Layout><Setting/></Layout> } />
  
     </Routes>
    </>
    }
    {/* <Loader /> */}
    
    </BrowserRouter>
   
  );
}

export default App;

import React,{useState} from 'react'
import './App.css'

import {Routes,Route} from 'react-router-dom';
import {  Button, Layout, Menu} from 'antd';
// import { useNavigate } from "react-router-dom";

import Login from './components/Login';
import Sellers from './components/Sellers'
import SellersLog from './components/SellersLog';
import ShopersLog from './components/ShopersLog';
import Shopers from './components/Shopers'
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import SellerPer from './components/SellerPer';
import SellerPrew from './components/SellerPrew';
import SellerEdit from './components/SellerEdit';
import Navbar from './components/Navbar'

function App() {
  const [cartItems, setCartItems] = useState({});
  const handleAddToCart = (item) =>{
    setCartItems({...cartItems, ...item})
  }
  return (
   <div>
   {/* <div>{ <Login />} </div> */}
    
    <Routes>
      <Route path='/' element={< Login />} />
      <Route path='/sellers' element={< Sellers/>} />
      <Route path='/sellerLog' element={< SellersLog/>} />
      <Route path='/shoperLog' element={< ShopersLog/>} />
      <Route path='/shopers' element={< Shopers/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/products' element={<Products handleAddToCart={handleAddToCart} cartItems={cartItems} />} /> 
      <Route path='/cart' element={<Cart cartItems={cartItems} />} />
      <Route path='/cartItem' element={<CartItem/>} />
      <Route path='/sellerPer' element={<SellerPer/>} />
      <Route path='/sellerPrew' element={<SellerPrew/>} />
      <Route path='/sellerEdit' element={<SellerEdit/>} />
      {/* <Route path='/navbar' element={<Navbar/>} /> */}
    </Routes>
   </div> 
  )
}

export default App

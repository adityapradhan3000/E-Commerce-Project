import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Placeorders from './pages/Placeorders'
import Orders from './pages/Orders'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] 1g:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/place-order' element={<Placeorders/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/collection' element={<Collections/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

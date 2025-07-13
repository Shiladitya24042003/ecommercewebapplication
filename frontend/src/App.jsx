import React, { useState } from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './components/Signup'
import toast, { Toaster } from 'react-hot-toast'
import Cart from './components/Cart'
import { useAuth } from './context/AuthProvider'
import Contact from './components/Contact'
import AdminLogin from './components/AdminLogin'
import { CartProvider } from './context/CartContext'
import AdminLoginPage from './components/AdminLoginPage'
import Profile from './components/Profile'
import About from './components/About'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [authUser, setAuthUser] = useAuth()
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'></div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/adminloginpage' element={<AdminLoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path='/adminlogin' element={
            authUser && authUser.userType === "ADMIN" ? (
              <AdminLogin />
            ) : <>
            <Navigate to='/'/>
            </>
          } />
          <Route path='/profile' element={<Profile/>} />

        </Routes>
        <Toaster />
      </CartProvider>

    </>
  )
}

export default App
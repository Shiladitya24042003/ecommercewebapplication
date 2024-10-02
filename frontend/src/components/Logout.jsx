import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../context/CartContext'
import { set } from 'react-hook-form'

function Logout() {
    const [authUser, setAuthUser] = useAuth()
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            })
            
            localStorage.removeItem("Users")
            localStorage.removeItem("cartItems")
            toast.success("Logout Successfully")
            setTimeout(() => {
                window.location.reload()
            }, 2000);

        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }

    return (
        <div>
            <button
                className='mx-2 px-3 py-2 bg-transparent border border-red-500 text-red-500 rounded-full hover:bg-pink-500 hover:text-white hover:shadow-pink-500/50 shadow-none transition-all duration-300 ease-in-out'
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>
    )
}

export default Logout
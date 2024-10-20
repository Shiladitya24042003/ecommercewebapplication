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
        <div className=''>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none">
                    <div className="avatar placeholder">
                        <div className="ring-violet-500 ring-offset-base-100 w-7 rounded-full ring ring-offset-2">
                            <span className='text-xl'>{authUser.name[0]}</span>
                        </div>
                    </div>
                </div>
                <ul tabIndex={0} className="dropdown-content menu bg-black rounded-box  z-[1] w-40 p-2 shadow">
                    <li><a> Profile</a></li>
                    <li><a onClick={handleLogout}>Logout</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Logout
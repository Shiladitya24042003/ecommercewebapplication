import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'
import { useCart } from '../context/CartContext'
import { set } from 'react-hook-form'
import Profile from './Profile'
import { Link } from 'react-router-dom'

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
                <ul tabIndex={0} className="absolute right-0 dropdown-content menu bg-black rounded-box  z-[1] w-40 p-2 shadow">
                    <li><Link to = '/profile'> Profile</Link></li>
                    <li><a onClick={handleLogout}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path fill-rule="evenodd" d="M18.586 13h-8.083c-.523 0-.947-.448-.947-1s.424-1 .947-1h8.083l-2.738-2.737a1 1 0 011.415-1.415l4.444 4.445a1 1 0 010 1.414l-4.444 4.445a1 1 0 01-1.415-1.415L18.586 13zM9 5H6a1 1 0 00-1 1v12a1 1 0 001 1h3a1 1 0 110 2H6a3 3 0 01-3-3V6a3 3 0 013-3h3a1 1 0 010 2z" clip-rule="evenodd"></path></svg>Logout</a></li>
                </ul>
            </div>
        </div>

    )
}

export default Logout
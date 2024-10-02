import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Login from './Login';
import axios from "axios"
import toast from 'react-hot-toast';

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // Initialize navigate function
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = {
            userId: data.name,
            name: data.name,
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Signup Successful!');
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);
                }
            });

        navigate('/');
    };

    return (
        <>
            <div id="" className="flex h-screen items-center justify-center">
                <div className="modal-box p-5 rounded-md shadow-[0_15px_35px_0_rgba(255,105,180,0.6)]">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => navigate("/")}
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Signup</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4 space-y-2'>
                            <label>Name</label>
                            <br />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-80 px-3 py-1 border border-gray-500 rounded-md outline-none bg-transparent"
                                {...register('name', { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email id"
                                className="w-80 px-3 py-1 border border-gray-500 rounded-md outline-none bg-transparent"
                                {...register('email', { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border border-gray-500 rounded-md outline-none bg-transparent"
                                {...register('password', { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around'>
                            <button
                                type="submit"
                                className="bg-pink-500 text-white font-bold py-1 px-4 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
                            >
                                Signup
                            </button>
                            <p>Already have an account?
                                <button
                                    type="button"
                                    className='underline text-blue-500 cursor-pointer'
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                >
                                    Login
                                </button>
                            </p>
                        </div>
                    </form>
                    <Login />
                </div>
            </div>
        </>
    );
}

export default Signup;

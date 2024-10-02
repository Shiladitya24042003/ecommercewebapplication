import React from 'react';
import { Link } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // use reset to clear form values
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('Login Successful!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);

                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);

                }
            });
        // Handle form submission (e.g., send data to server)
        reset(); // Reset form fields after submission
        document.getElementById('my_modal_3').close(); // Close modal on successful login
    };

    // Function to close the modal and reset form
    const closeModal = () => {
        reset(); // Reset form when modal is closed
        document.getElementById('my_modal_3').close();
    };

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box shadow-[0_15px_35px_0_rgba(255,105,180,0.6)]">
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal} // Call closeModal instead of directly closing modal
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email id"
                                className="md:w-80 px-3 py-1 border border-gray-500 rounded-md outline-none bg-transparent"
                                {...register('email', { required: true })}
                            />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="md:w-80 px-3 py-1 border border-gray-500 rounded-md outline-none bg-transparent"
                                {...register('password', { required: true })}
                            />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around mt-4'>
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-600 duration-200"
                            >
                                Login
                            </button>
                            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}

export default Login;

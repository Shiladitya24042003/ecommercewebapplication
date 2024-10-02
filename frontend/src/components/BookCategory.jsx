import React from 'react';
import { Link } from 'react-router-dom';
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function BookCategory() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset, // use reset to clear form values
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            id: data.id,
            name: data.name,
            title: data.title,
            price: data.price,
            category: data.category,
            image: data.image
        }
        await axios.post("http://localhost:4001/category", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success('New Book added Successfully!');
                    document.getElementById("my_modal_4").close();
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);

                }

            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error:" + err.response.data.message);

                }
            });
        // Handle form submission (e.g., send data to server)
        reset(); // Reset form fields after submission
        document.getElementById('my_modal_4').close(); // Close modal on successful login
    };
    const closeModal = () => {
        reset(); // Reset form when modal is closed
        document.getElementById('my_modal_4').close();
    };
    return (
        <>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box shadow-[0_15px_35px_0_rgba(255,105,180,0.6)]">
                    {/* Close button */}
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal}
                    >
                        ✕
                    </button>
                    <h3 className="font-bold text-lg text-center">Enter New Book Details!</h3>

                    {/* Form */}
                    <form method="dialog" className="mt-6 space-y-4"
                        onSubmit={handleSubmit(onSubmit)}>
                        {/* Email Field */}
                        <div className='space-y-2'>
                            <input
                                type="text"
                                id="id"
                                placeholder="Enter id"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('id', { required: true })}
                            />
                            <br />
                            {errors.id && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password Field */}
                        <div className='space-y-2'>

                            <input
                                type="text"
                                id="name"
                                placeholder="Enter the name of the book"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('name', { required: true })}
                            />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>

                            <input
                                type="text"
                                id="title"
                                placeholder="Enter the title of the book"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('title', { required: true })}
                            />
                            <br />
                            {errors.title && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>

                            <input
                                type="number"
                                id="price"
                                placeholder="Enter the price of the book"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('price', { required: true })}
                            />
                            <br />
                            {errors.price && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>

                            <input
                                type="text"
                                id="category"
                                placeholder="Enter the categrory of the book"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('category', { required: true })}
                            />
                            <br />
                            {errors.category && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        <div className='space-y-2'>

                            <input
                                type="text"
                                id="image"
                                placeholder="Enter the image of the book"
                                className="w-full px-3 py-2 border-b-2 border-underline border-gray-300 focus:ring-0 focus:outline-none bg-transparent transition-colors duration-300 hover:border-pink-500"
                                {...register('image', { required: true })}
                            />
                            <br />
                            {errors.category && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center mt-4'>
                            <button
                                type="submit"
                                className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition duration-200"
                            >
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>


    );
}

export default BookCategory;

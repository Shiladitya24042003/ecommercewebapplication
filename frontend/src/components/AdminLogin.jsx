import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { getBook } from '../../../backend/controller/book.controller';
import toast from 'react-hot-toast';
import BookCategory from './BookCategory';

function AdminLogin() {
    const [books, setBooks] = useState([]); // Changed 'book' to 'books' for clarity

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res);
                setBooks(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4001/del`, {
                data: { id: id }
            });
            // Update the state after deletion to reflect changes in the UI
            toast.success("Successfully Deleted the Book!")
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='mt-32'>
                <div className='flex justify-between items-center mx-16 md:mx-40'>
                    <div><h1 className='text-2xl md:text-4xl'>All Books List</h1></div>
                    <div>
                        <a 
                            style={{
                                backgroundColor: 'transparent',
                                color: 'white',
                                padding: '9px 15px',
                                borderRadius: '50%',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '24px',
                                transition: 'transform 0.3s ease',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.5)'; // Slightly enlarges the button
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)'; // Resets size
                            }}
                            onClick={() => document.getElementById('my_modal_4').showModal()}
                        >
                            +

                        </a>
                        <BookCategory />
                    </div>


                </div>
                <span className="my-8" style={{ display: 'block', width: '80%', margin: '0 auto', marginTop: '20px', marginBottom: '50px' }}>
                    <hr style={{ width: '100%', border: '1px solid hotpink' }} />
                </span>
                <div className='md:ml-16 justify-center'>
                    {books.map((item) => (
                        <div
                            key={item._id}
                            style={{
                                border: '1px solid #ccc',
                                padding: '10px',
                                margin: '10px',
                                width: '90%',
                                position: 'relative',
                                transition: 'background-color 0.3s',
                                color: 'bg-white-900', // Default text color
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#c5cae9'; // Darker lavender mist
                                e.currentTarget.style.color = 'black'; // Change text color to black
                                const svg = e.currentTarget.querySelector('svg');
                                if (svg) {
                                    svg.setAttribute('fill', 'black'); // Change SVG fill color to black
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.color = 'inherit'; // Reset text color to default
                                const svg = e.currentTarget.querySelector('svg');
                                if (svg) {
                                    svg.setAttribute('fill', 'white'); // Reset SVG fill color to white
                                }
                            }}
                        >
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <h3 className='text-right'>{item._id}</h3>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                width="24px"
                                height="24px"
                                style={{
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                }}
                                onClick={() => handleDelete(item.id)}
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1z" />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default AdminLogin;

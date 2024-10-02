// src/components/Course.js
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import Modal from './Modal';
import axios from 'axios';

function Course() {
    const [book, setBook] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBook();
    }, []);

    // Function to open modal and set the selected book
    const openModal = (book) => {
        setSelectedBook(book);
        setIsModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBook(null);
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 md:py-5 z-50'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-500">
                        What you want to read next?
                    </h1>
                    <p className='pt-2'>
                        Books are windows into different worlds, offering knowledge, entertainment, and insight. They can transport you to distant places, introduce you to new ideas, and deepen your understanding of life. Whether fiction or non-fiction, books have the power to inspire, educate, and connect us across time and culture.
                    </p>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                        {book.map((item) => (
                            <Cards key={item.id} item={item} onClick={openModal} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Render Modal only when it's open */}
            {isModalOpen && <Modal book={selectedBook} onClose={closeModal} />}
        </>
    );
}

export default Course;

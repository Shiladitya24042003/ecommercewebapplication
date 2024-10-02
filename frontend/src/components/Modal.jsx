import React from 'react';

function Modal({ book, onClose }) {
    if (!book) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <button 
                    className="absolute top-2 right-2 text-xl font-bold"
                    onClick={onClose}
                >
                    ✕
                </button>

                <img src={book.image} alt={book.title} className="w-full h-64 object-cover rounded-lg" />
                <h2 className="text-2xl font-bold text-black mt-4">{book.title}</h2>
                <p className="text-gray-600 mt-2">Category: {book.category}</p>
                <p className="text-gray-800 mt-4">{book.description}</p>
                <p className="text-gray-800 mt-4">Price: ₹{book.price}</p>

                <div className="mt-6">
                    <button 
                        className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

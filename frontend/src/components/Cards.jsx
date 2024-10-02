import React from 'react';
import { useCart } from '../context/CartContext';  // Import useCart to access the cart context

function Cards({ item, onClick }) {
    const { addToCart } = useCart();  // Destructure addToCart from the cart context

    const handleAddToCart = () => {
        addToCart({
            id: item.id,
            name: item.name,
            price: item.price
        });
    };

    return (
        <div className='mt-4 p-3' onClick={() => onClick(item)}>
            <div className="card bg-base-100 w-92 shadow-xl mt-4 hover:scale-105 hover:shadow-[0_4px_15px_hotpink] duration-200 dark:bg-slate-900 dark:text-white">
                <figure>
                    <img src={item.image} alt={item.title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.title}
                        <div className="badge badge-accent">{item.category}</div>
                    </h2>
                    <p>{item.name}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">₹{item.price}</div>
                        <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        <button 
                            className='btn btn-rounded hover:bg-orange-600 hover:text-black transition: 200'
                            onClick={(e) => { 
                                e.stopPropagation();  // Prevent the card click from firing
                                handleAddToCart(); 
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;

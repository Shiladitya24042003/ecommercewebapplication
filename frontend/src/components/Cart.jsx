import React from 'react';
import { useCart } from '../context/CartContext';
import tick from "../../public/tick.svg"

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart(); // Import clearCart

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const handleCheckout = () => {
        // Clear the cart
        clearCart();

        // Open the modal
        const modal = document.getElementById('my_modal_2');
        modal.showModal();

        // Close the modal after 1 second (1000 milliseconds)
        setTimeout(() => {
            modal.close();
        }, 1000);
    };

    return (
        <div className='justify center text-center'>
            <h2 className='mt-32 text-4xl'>My Cart</h2>
            <span className="my-8" style={{ display: 'block', width: '80%', margin: '0 auto', marginTop: '20px', marginBottom: '50px' }}>
                <hr style={{ width: '100%', border: '1px solid hotpink' }} />
            </span>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <table className="justify-center text-center table w-full mt-4">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Item</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2">Quantity</th>
                                <th className="px-4 py-2">Total</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td className="px-4 py-2">{item.name}</td>
                                    <td className="px-4 py-2">₹{item.price}</td>
                                    <td className="px-4 py-2">{item.quantity}</td>
                                    <td className="px-4 py-2">₹{item.price * item.quantity}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <span className="my-8" style={{ display: 'block', width: '80%', margin: '0 auto', marginTop: '20px', marginBottom: '50px' }}>
                        <hr style={{ width: '100%', border: '1px solid green' }} />
                    </span>
                    <div className="mt-4 text-right mr-40">
                        <h3 className="text-lg font-bold">Total: ₹{calculateTotal()}</h3>
                    </div>

                    {/* Checkout Button */}
                    <div className="mt-6 text-right mr-40">
                        <button
                            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-200"
                            onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </>
            )}

            {/* Modal for Checkout */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', width: 'fit-content', flexDirection: 'column' }}>
                    {/* Payment successful message */}
                    <h3 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '18px', color: 'green' }}>
                        Payment successful!
                    </h3>
                    {/* Tick mark image */}
                    <img src={tick} alt="Tick mark" style={{ display: 'block', margin: '0 auto' }} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default Cart;

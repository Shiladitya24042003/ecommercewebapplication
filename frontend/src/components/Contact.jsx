import React from 'react'
import Navbar from './Navbar'

function Contact() {
    return (
        <>
        <Navbar/>
            <div className='mt-32 text-center justify-center'>
                <div className='my-8'>We’re here to help! Feel free to reach out to us for any queries, suggestions, or support. Our team will get back to you as soon as possible.</div>
                <hr className='bg-gray-600' />
                <div className='mt-8'>
                    <p>Customer Support: If you have any questions about your order, delivery, or any general inquiries, contact our customer support team.</p>

                    <p>Email: support@webgranth.com</p>
                    <p>Phone: +91 1234567890</p>
                    <p>Available: Monday to Friday, 9 AM – 6 PM</p>



                </div>
            </div>
        </>


    )
}

export default Contact
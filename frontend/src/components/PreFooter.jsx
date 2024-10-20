import React from 'react'

function PreFooter() {
  return (
    <div className="py-10">
      <h1 className='text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-white-600 to-green-600 '>
        Why to Choose us?
      </h1>

      <div className="flex justify-center mt-6">
        <hr className="h-1 bg-gradient-to-r from-pink-400 via-blue-500 to-red-600 border-0 w-3/5 animate-pulse" />
      </div>

      <div className="px-5 mt-8">
        <ul className="space-y-4 text-lg">
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Wide Selection:</strong> From bestsellers to hidden gems, we offer a vast collection across genres, ensuring there's something for everyone.
            </div>
          </li>
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Personalized Recommendations:</strong> Not sure what to read next? Our tailored recommendations and customer reviews will help you find your next favorite book.
            </div>
          </li>
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Affordable Prices:</strong> We believe everyone should have access to great books, which is why we offer competitive prices and special deals.
            </div>
          </li>
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Community-Driven:</strong> We host regular events, author talks, and book clubs to foster a community of readers, making our store more than just a place to shop.
            </div>
          </li>
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Eco-Friendly Packaging:</strong> We care about the environment, and our sustainable packaging reflects our commitment to eco-conscious practices.
            </div>
          </li>
          <li className="flex items-start bg-black text-white p-4 rounded-lg">
            <span className="text-green-500 mr-3">✔️</span>
            <div>
              <strong>Excellent Customer Service:</strong> Our dedicated team is here to assist you with any queries, ensuring a smooth and pleasant shopping experience.
            </div>
          </li>
        </ul>
        <p className="mt-6 text-lg text-center">
          Choose us to fuel your reading passion and become part of a like-minded community!
        </p>
      </div>

      <div className="flex justify-center mt-12">
        <hr className="w-4/5 border-t-2 border-gray-600" />
      </div>

    </div>
  )
}

export default PreFooter

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductCarousel = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setOffers(response.data.slice(0, 6));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product offers:', error);
        setLoading(false);
      });
  }, []);

  // Function to scroll the carousel left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll the carousel right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Exclusive Offers</h2>

      {/* Left Arrow Button */}
      <div
        onClick={scrollLeft}
        className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        ❮
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <svg
            className="w-8 h-8 animate-spin text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v4m0 8v4m4-4h4m-8 0H4"
            />
          </svg>
        </div>
      )}

      {/* Carousel Items */}
      <div
        ref={carouselRef}
        className="overflow-x-auto w-full flex space-x-4 px-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-500"
      >
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex-shrink-0 w-64 h-80 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-40 object-contain rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold truncate">{offer.title}</h3>
              <p className="text-sm text-gray-600 truncate">{offer.description}</p>
              <p className="mt-2 text-xl font-bold text-gray-800">${offer.price}</p>
              {/* Link to ProductDetails */}
              <Link to={`/product/${offer.id}`}>
                <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <div
        onClick={scrollRight}
        className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
      >
        ❯
      </div>
    </div>
  );
};

export default ProductCarousel;

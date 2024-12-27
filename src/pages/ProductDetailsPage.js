import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();  // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [error, setError] = useState(null);      // Track error state
  const { addToCart } = useCart();
  const navigate = useNavigate(); // To navigate to the cart page

  useEffect(() => {
    // Fetch product details from the API
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to load product details. Please try again later.');
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);  // Add the product to cart context
      navigate('/cart');    // Navigate to the cart page immediately after adding
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);  // Add product to cart
      navigate('/cart');    // Navigate to the cart page immediately
    }
  };

  if (loading) {
    return (
      <div className="text-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
        <p className="text-xl text-gray-600 mt-4">Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-12 max-w-screen-xl mx-auto">
      {product ? (
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Image Section */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
          {/* Product Info Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <div className="flex items-center mb-6">
              <p className="text-xl font-semibold text-gray-900 mr-4">Price:</p>
              <p className="text-2xl text-blue-600 font-bold">${product.price}</p>
            </div>
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ease-in-out transform hover:scale-105 shadow-lg text-center block mb-4"
            >
              Add to Cart
            </button>
            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="w-full py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition ease-in-out transform hover:scale-105 shadow-lg text-center block"
            >
              Buy Now
            </button>
            <Link to="/products" className="block mt-4 text-center text-blue-600 hover:text-blue-700">
              Back to Products
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetails;

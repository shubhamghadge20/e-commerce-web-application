import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCarousel from '../components/ProductCarousel';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  
  // State to store products data
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch mock data with Axios
    axios.get('https://fakestoreapi.com/products') // This is a mock API, you can replace it with your own API.
      .then(response => {
        setFeaturedProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  // Loading and Error handling
  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="loader">Loading...</div> {/* You can replace this with a spinner or progress indicator */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Banner Section with Carousel */}
      <section className="my-8">
        <ProductCarousel />
      </section>

      {/* Featured Products Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold text-center mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.title, // Assuming 'title' is the product name
                price: product.price,
                image: product.image, // Assuming 'image' contains the image URL
              }}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

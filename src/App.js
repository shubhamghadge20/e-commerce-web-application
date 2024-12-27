// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About'; // The About Us page component
import Contact from './pages/Contact';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ShoppingCartPage from './pages/ShoppingCartPage'; // Import the Shopping Cart Page
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<ProductCatalog />} />
          <Route path="/products" element={<ProductCatalog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} /> {/* Add this route */}
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;

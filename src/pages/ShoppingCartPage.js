import React from 'react';
import { useCart } from '../context/CartContext'; // Cart context for managing cart state
import { Link } from 'react-router-dom';

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, updateCartQuantity, totalPrice } = useCart(); // Extract cart functions and items from context

  const handleIncrement = (id, currentQuantity) => {
    updateCartQuantity(id, currentQuantity + 1); // Increment quantity by 1
  };

  const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateCartQuantity(id, currentQuantity - 1); // Decrement quantity by 1, ensuring it doesn't drop below 1
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {/* Loop through each item in the cart */}
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b py-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mr-4"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg text-gray-600">${item.price}</p>
                <div className="flex items-center mt-2">
                  {/* Increment and Decrement Buttons */}
                  <button
                    onClick={() => handleDecrement(item.id, item.quantity)}
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300 focus:outline-none"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 border-t border-b text-center w-12">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncrement(item.id, item.quantity)}
                    className="px-2 py-1 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300 focus:outline-none"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)} // Remove item from cart
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-lg font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Total Price: ${totalPrice.toFixed(2)}</h3>
            <Link
              to="/checkout"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      ) : (
        <div className="text-center py-10 text-lg text-gray-600">
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantiy, emptyCart } from '../redux/cartSlice';

const CartTable = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantiy({ id, quantity: newQuantity }));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };


  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 rounded-lg overflow-hidden shadow-md">
      <div className="bg-gray-900 text-white flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-semibold">Cart Calculation</h2>
        <button 
          onClick={handleEmptyCart}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <FaTrash />
          Empty cart
        </button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-100 text-sm font-semibold text-gray-800">
            <th className="px-4 py-3">Action</th>
            <th className="px-4 py-3">Product</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Quantity</th>
            <th className="px-4 py-3">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-3">
                  <button 
                    onClick={() => handleRemoveItem(item.id)}
                    className="bg-red-100 text-red-500 p-2 rounded"
                  >
                    <FaTrash />
                  </button>
                </td>
                <td className="px-4 py-3">
                  <img 
                    src={item?.images } 
                    alt="product" 
                    className="w-10 h-10 rounded-md" 
                  />
                </td>
                <td className="px-4 py-3 capitalize">{item.title}</td>
                <td className="px-4 py-3">₹{item.price}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-blue-100 rounded"
                    >
                      −
                    </button>
                    <span className="border px-4 py-1 rounded text-center">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      className="px-2 py-1 bg-blue-100 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3 font-semibold">
                  ₹{item.price * item.quantity}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                Your cart is empty
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {cartItems.length > 0 && (
        <div className="flex justify-between px-6 py-4 bg-white text-base">
          <p>
            <span className="font-semibold">Items in cart :</span>{' '}
            <span className="text-red-500 font-semibold">{totalItems}</span>
          </p>
          <p>
            <span className="font-semibold">Total Price :</span>{' '}
            <span className="text-red-500 font-semibold">₹{totalPrice}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CartTable;
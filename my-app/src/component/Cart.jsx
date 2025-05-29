import React from 'react';
import food from '../assets/food.avif'; 
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const CartTable = () => {

  const cartItems = useSelector((state)=>state.cart.items)
  const dispatch = useDispatch()
  console.log(cartItems)

  return (
    <div className="max-w-4xl mx-auto mt-10 rounded-lg overflow-hidden shadow-md">
  
      <div className="bg-gray-900 text-white flex justify-between items-center px-6 py-4">
        <h2 className="text-xl font-semibold">Cart Calculation</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded flex items-center gap-2">
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
          <tr className="border-t">
          
            <td className="px-4 py-3">
              <button className="bg-red-100 text-red-500 p-2 rounded">
                <FaTrash />
              </button>
            </td>

  
            <td className="px-4 py-3">
              <img src={food} alt="product" className="w-10 h-10 rounded-md" />
            </td>

 
            <td className="px-4 py-3 capitalize">punjabi</td>


            <td className="px-4 py-3">350</td>


            <td className="px-4 py-3">
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-blue-100 rounded">−</button>
                <span className="border px-4 py-1 rounded text-center">1</span>
                <button className="px-2 py-1 bg-blue-100 rounded">+</button>
              </div>
            </td>


            <td className="px-4 py-3 font-semibold">350</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-between px-6 py-4 bg-white text-base">
        <p>
          <span className="font-semibold">Items in cart :</span>{' '}
          <span className="text-red-500 font-semibold">1</span>
        </p>
        <p>
          <span className="font-semibold">Total Price :</span>{' '}
          <span className="text-red-500 font-semibold">350</span>
        </p>
      </div>
    </div>
  );
};

export default CartTable;

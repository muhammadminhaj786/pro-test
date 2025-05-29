import React from 'react';
import food from '../assets/food.avif';
import { FaStar } from 'react-icons/fa';
import icon from '../assets/icon.webp';
import icon2 from '../assets/icon2.avif';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Card = ({item}) => {

  const dispatch = useDispatch()

  const handleAddToCart = ()=> {
    dispatch(addToCart(item))
  }

  return (
    <div className="w-[320px]  rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl mb-4">
      <div className=" h-[220px] w-[90%] mx-auto rounded-xl ">
        <img src={food}  className="h-full w-full object-cover rounded-lg mt-5" />
      </div>

      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold capitalize line-clamp-1">{item.title}</p>
          <div className="flex items-center bg-green-600 px-2 py-[2px] rounded text-white text-sm font-medium">
            {item.rating} <FaStar size={12} className="ml-1" />
          </div>
        </div>

      <div className='flex justify-between'>
          <p className="text-sm text-gray-600 mt-1 line-clamp-1">{item.description}</p>

        <p className="text-base font-medium mt-1">{item.price}</p>
      </div>

        <hr className="my-3 border-gray-300" />

        <div className="flex items-center justify-between">
          <img src={icon} alt="icon" className="w-5 h-5" />
          <button onClick={handleAddToCart} className="bg-[#FF3054DB] text-white text-sm px-4 py-2 rounded-md font-medium">
            Add To Cart
          </button>
          <img src={icon2} alt="icon2" className="w-[60px] h-[30px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Card;

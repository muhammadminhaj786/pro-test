import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const navigate = useNavigate();


    const cartItemsCount = useSelector((state) => state.cart.items.length);


    const shiftPage = () => {
        navigate('/cart');
    };

    return (
        <div className="h-[50px] bg-black">
            <div className="w-[90%] mx-auto flex justify-between p-3">
                <p className="text-white text-2xl">E-finder</p>
                <div className="relative">
                    <CiShoppingCart
                        onClick={shiftPage}
                        color="white"
                        size={30}
                        className="cursor-pointer"
                    />
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {cartItemsCount}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
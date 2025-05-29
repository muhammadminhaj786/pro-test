import { CiShoppingCart } from "react-icons/ci"
import { useNavigate } from "react-router-dom"


const NavBar = () => {

    const navigate = useNavigate()

    const shiftPage = ()=>{
        navigate('/cart')
    }

    return (
        <div className="h-[50px] bg-black ">
            <div className="w-[90%] mx-auto flex justify-between p-3">
                <p className="text-white text-2xl">E-finder</p>
            <CiShoppingCart onClick={shiftPage} color="white" size={30} />
            </div>
        </div>
    )
}

export default NavBar
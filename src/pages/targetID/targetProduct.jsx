import { useContext } from "react"
import { ProductContext } from "../../routes/routes"
import { Link, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "../../components/header/header";
import { AuthContext } from "../../components/auth/authContext";
import Footer from "../../components/footer/footer";

const TargetProduct = () => {

    const {product, cartItem, setCartItem} = useContext(ProductContext)
    const { auth } = useContext(AuthContext)
        
    const { id } = useParams()
    
    const filterProduct = product.find(item => item.id === parseInt(id))
        
    const addToCart = () => {
        const existingUser = cartItem.findIndex(item => item.id === filterProduct.id) 
        if(existingUser !== -1){
            setCartItem(prevItem => prevItem.map(item => item.id === filterProduct.id ? {
                ...item, quantity : item.quantity + 1
            } : item))
        }else{
            const newItem = {
                ...filterProduct, quantity : 1               
            }
            setCartItem([...cartItem, newItem])
        }
        
        toast.success("Product add to cart")                
    }   
    
    const buyProduct = () => {
        toast.success("Product Purchased")
    }

    const exchangeRate = 83.50

    const convertDollarToRupees = (dollars) => {
        return dollars * exchangeRate;
    }
    
    const discount = (filterProduct.price * filterProduct.discount) / 100
    const finalPrice = filterProduct.price - discount
    const amountFinalRupee = convertDollarToRupees(finalPrice).toFixed(2)
    const amountRupee = convertDollarToRupees(filterProduct.price).toFixed(2)
       
    return (
        <div>
            <Header />
            <div className="flex sm:flex-row flex-col flex-wrap min-h-screen  p-4 bg-white">  
                <div className=" sm:w-[40%] flex flex-col gap-8 p-4">
                    <img src={filterProduct.image} />
                    <div className="flex  text-sm font-semibold justify-evenly sm:flex-row flex-col sm:gap-0 gap-2">
                        {auth.currentUser ? <div onClick={addToCart} className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 w-36 h-14 rounded-xl flex items-center justify-center ">Add to Cart</div> : <Link to={"/login"} className="cursor-pointer bg-yellow-300 hover:bg-yellow-400 w-36 h-14 rounded-xl flex items-center justify-center ">Add to Cart</Link>}
                        <ToastContainer />
                        {auth.currentUser ? <div onClick={buyProduct} className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 w-36 h-14 rounded-xl flex items-center justify-center">Buy Now</div> : <Link to={"/login"}  className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 w-36 rounded-xl flex items-center justify-center h-14 ">Buy Now</Link>}
                    </div>
                    
                </div>
                <div className=" sm:w-[60%] flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">{filterProduct.title}</h3>
                    <div className="bg-red-600 w-36 text-sm rounded-sm text-white p-1 flex item-center justify-center">Great Indian Festival</div>
                    <p className="text-md text-pink-500">-{filterProduct.discount || 0}% <span className="text-md text-black font-semibold">₹{amountFinalRupee}</span></p>
                    <h4 className="border-b border-gray-400 text-sm text-gray-600 font-semibold pb-2">M.R.P.: <span className=" line-through">₹{amountRupee}</span></h4>
                    <div className=" w-60 flex justify-between">
                        <div className="flex flex-col text-sm font-semibold  text-black">
                            <span>Colour</span>
                            <span>Brand</span>
                            <span>Model</span>
                        </div>
                        <div className="flex flex-col text-gray-600 text-sm" >
                            <span>{filterProduct.color}</span>
                            <span>{filterProduct.brand}</span>
                            <span>{filterProduct.model}</span>
                        </div>                                       
                    </div>
                    <div className="border-t border-gray-400 pt-2 flex flex-col gap-2">
                        <p className="font-semibold">About this item</p>
                        <span className=" font-serif text-gray-500 text-sm">{filterProduct.description}</span>
                    </div>
                
                </div>               

                
            </div>
            <Footer />
        </div>
    )
    
}

export default TargetProduct
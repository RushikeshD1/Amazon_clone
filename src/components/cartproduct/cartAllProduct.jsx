import PropTypes from "prop-types"
import { useState } from "react"

const CartItem = ({ item , deleteProduct, updateProductQuantity }) => { 

    const [quantity, setQuantity] = useState(item.quantity)
    
    const exchangeRate = 83.50;
        
    const handleChangeEvent = (e) => {
        const newQuantity = e.target.value
        setQuantity(newQuantity)
        updateProductQuantity(item.id, newQuantity)        
    }

    const convertDollarToRupees = (dollars) => {
        return dollars * exchangeRate;
    }

    const discount = (item.price * item.discount) / 100
    const finalPrice = item.price - discount
    const amountInFinalRupee = convertDollarToRupees(finalPrice).toFixed(2)
    const amountFullPrice = convertDollarToRupees(item.price).toFixed(2)
    
  return (
    <div className=' sm:flex sm:flex-row w-full border-b border-gray-300 p-4 flex-col'>        
        <div className=" sm:w-[30%] w-full pr-2 flex items-center justify-center ">
            <img src={item.image} alt="product Image"  className="w-full"/>
        </div>
        <div className=" sm:w-[50%] w-full flex flex-col">
            <div className=" flex flex-col gap-2">
                <h3 className="text-md font-bold">{item.title}</h3>
                <span className="text-sm text-green-500">In stock</span>
                <span className="text-sm text-black font-semibold">Colour: <span className="text-black font-normal">{item.color}</span></span>
            </div>
            <div className="flex items-baseline mt-5">
                <div className="bg-gray-200 p-1 text-sm rounded-md cursor-pointer hover:bg-gray-300 flex justify-center items-center">
                    Qty : <select  value={quantity} onChange={handleChangeEvent} className="bg-transparent cursor-pointer outline-none"> 
                        {[...Array(8)].map((_, index) => (
                            <option key={index + 1} value={index + 1}>{index + 1}</option>
                        ))}                        
                    </select>
                </div>
                <span className="text-gray-400 ml-2">|</span>
                <span onClick={() => deleteProduct(item.id)} className="ml-2 text-sm text-blue-300 hover:underline cursor-pointer">Delete</span>                
            </div>
        </div>
        <div className=" sm:w-[20%] w-full sm:text-right  flex flex-col gap-2 sm:p-0 p-2">
            <div className=  "bg-red-600 w-16 rounded-sm text-white text-sm  flex sm:items-center justify-center p-1 sm:float-right sm:text-right text-start font-semibold ml-14">{item.discount}%off</div>
            <p className="text-sm font-semibold text-red-700">Great Indian Festival</p>
            <h5 className="text-sm font-semibold">₹{amountInFinalRupee}</h5>
            <span className="text-sm font-semibold text-gray-500">M.R.P.: <span className="line-through">₹{amountFullPrice}</span></span>
        </div>
    </div>
  )
}

CartItem.propTypes = {
    item : PropTypes.object,
    deleteProduct : PropTypes.func,
    updateProductQuantity : PropTypes.func
}

export default CartItem
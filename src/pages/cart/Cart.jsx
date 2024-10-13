import { useContext } from 'react'
import PropTypes from "prop-types"
import { ProductContext } from '../../routes/routes'
import CartItem from '../../components/cartproduct/cartAllProduct'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



const Cart = () => {

  const {cartItem, setCartItem} = useContext(ProductContext)

  console.log(cartItem);
   
  
  const renderProduct = () => 
    cartItem.map((item) => <CartItem key={item.id} item={item} deleteProduct={deleteProduct} setCartItem={setCartItem} updateProductQuantity={updateProductQuantity}/>)
  
  // const discount = (item.price * item.discount) / 100
  // const finalPrice = item.price - discount
  // const amountInFinalRupee = convertDollarToRupees(finalPrice).toFixed(2)
  // const amountFullPrice = convertDollarToRupees(item.price).toFixed(2)

  const exchangeRate = 83.50

  const convertDollarToRupees = (dollars) => {
    return dollars * exchangeRate;
}

  const total = cartItem.reduce((acc, item) =>{ 

    const discount = (item.price * item.discount) / 100
    const finalPrice = item.price - discount
    const amountInFinalRupee = convertDollarToRupees(finalPrice).toFixed(2)

    return acc + (amountInFinalRupee * item.quantity)
  }, 0)

  

  const buyProduct = () => {
    toast.success("Product Purchased")
  }

  const deleteProduct = (id) => {
    const filteredProduct = cartItem.filter(item => item.id !== id)
    setCartItem(filteredProduct)
  }

  const updateProductQuantity = (id, newQuantity) => {
    setCartItem(cartItem.map(item => item.id === id ? {
      ...item, quantity : newQuantity
    }: item))
  }

  return (
    <div>
      <Header />
      <div className="  flex sm:flex-row flex-wrap  p-4 gap-4 justify-between flex-col"> 

          <div className=" flex flex-col sm:w-[67%] bg-white w-full">         
              <div className=" h-20 flex items-start flex-col p-4 gap-1">
                  <h4 className="text-2xl font-semibold ">Shopping Cart</h4>
                  {cartItem.length === 0 ? <p className=' cursor-pointer hover:underline text-green-800'>No item added</p>:<p className=' cursor-pointer hover:underline text-green-800'>All items</p>}
              </div>
                  
              <div className="flex pl-4 pr-4 pb-4 flex-col ">
                <div className='border-t border-gray-300'>
                  {renderProduct()}
                </div>
                                        
              </div>
          </div> 
          <div className="sm:w-[31%] w-full h-32 bg-white flex items-center flex-row p-4 gap-4 sm:flex-col">
            <span className='  text-md font-semibold'>Subtotal ({cartItem.length} items):  <span className='text-black font-bold'> ₹{total}</span></span>
              <div onClick={buyProduct} className='bg-yellow-400 p-2 w-full items-center flex justify-center text-sm rounded-2xl cursor-pointer' >Proceed to Buy</div>
              <ToastContainer />
          </div>
      </div>
      <Footer />
    </div>
  )
}

Cart.propTypes = {
  cartItem : PropTypes.array
}

export default Cart
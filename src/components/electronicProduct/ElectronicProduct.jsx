import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"


const ElectronicProduct = ( { product } ) => {

      
    
    const navigate = useNavigate()

    const overFlow = (title, maxLength = 50) => {
        if(title.length > maxLength ){
            return title.slice(0, maxLength) + "..."
        }

        return title
    }

    const targetProduct = (id) => {
        
        navigate(`/product/${id}`)
        console.log("id clicked", id);
    }    

    const convertToRupees = (priceInDollars, exchangeRate = 83.50) => {
        return (priceInDollars * exchangeRate).toFixed(0);
    };

    const priceInRupees = convertToRupees(product.price);

  return (
    <div >
        <div className=" w-[230px]  flex flex-col flex-wrap bg-#ecf0f1 bg-white items-center justify-center  mt-2 ">  
            <div className="  w-[220px]">                
                <div className="   p-2 flex flex-col">
                    <div onClick={() => targetProduct(product.id)} className=" h-[220px] hover:cursor-pointer hover:text-red-500">
                        <img className=" w-[100%] h-[180px] " src={product.image} />
                        <h3 className="line-clamp-2 text-sm font-semibold ">{overFlow(product.title, 50)}</h3>
                    </div>
                    
                    <p className=" text-gray-500 hover:cursor-pointer font-semibold">{product.brand}</p>
                    <div className="flex relative">
                        <p><span className="text-gray-500 text-sm text-start">₹</span>{priceInRupees}.<span className="text-xs absolute top-2 transform translate-y-[-50%] text-gray-500 font-semibold">00</span></p>
                    </div>
                    <p className="text-yellow-700 text-3xl">★★★★<span className="">★</span></p>    
                                   
                    
                </div>    
            </div>              
        </div>
        
    </div>
  )
}

ElectronicProduct.propTypes = {
    product : PropTypes.object
}

export default ElectronicProduct
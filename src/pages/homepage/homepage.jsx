import { useContext, useEffect } from "react"
import { getAllProducts } from "../../apis"
import Banner from "../../components/Banner/banner"
import ProductDeal from "../../components/productDeals/productDeals"
import RenderProduct from "../../components/renderProduct/renderProduct"
import RenderProduct2 from "../../components/renderProduct/renderProduct2"
import { ProductContext } from "../../routes/routes"
import { Link } from "react-router-dom"

import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"

const HomePage = () => {

    const {product, setProduct} = useContext(ProductContext)    
    
    useEffect(() => {
        getAllProducts()
            .then(data => setProduct(data) )
            .catch(e => console.log("while getting product", e))              
    }, [])
              
    return(
        <div className="bg-[#bdc3c7] ">
            <Header />            
            <Banner />             
            
            <div className="  m-4  flex flex-col relative sm:-mt-72 -mt-[520px] z-10">
                <div className=" w-full  ">
                    <ProductDeal/>
                </div>
                <div className="bg-[#ffffff] mb-4">                   
                    <Link to={"/mobiles"} className=" flex flex-col items-start sm:items-center gap-6 bg-[#ffffff] px-4 py-2 sm:flex-row md:flex-row ">
                        <h1 className="font-bold text-xl ">Up to 40% off on | Bestselling SmartPhones</h1>
                        <p className=" text-green-950 hover:text-red-600 hover:underline cursor-pointer pt-1">See all offers</p>
                    </Link>
                    <RenderProduct product={product}  />    
                </div> 
                <div className="bg-[#ffffff]">
                    <div className="  flex flex-row items-center gap-6 bg-[#ffffff] px-4 py-2">
                        <h1 className="font-bold text-xl ">Up to 60% off on | Bestselling TVs</h1>
                        <Link to={"/tvs"} className=" text-green-950 hover:text-red-600 hover:underline cursor-pointer pt-1">See all offers</Link>
                    </div>
                    <RenderProduct2 product={product}/> 
                </div>    
            </div>  
            <Footer />
        </div>
    )
}

export default HomePage
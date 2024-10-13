import { useContext, useEffect } from "react"
import banner1 from "../../assets/Banner1Elec.gif"
import banner2 from "../../assets/Banner2Elec.jpg"
import banner3 from "../../assets/Banner3Elec.jpg"
import banner4 from "../../assets/Banner4Elec.gif"
import { ProductContext } from "../../routes/routes"
import { getAllProducts } from "../../apis"
import ElectronicProduct from "../../components/electronicProduct/ElectronicProduct"
import Footer from "../footer/footer"
import SidePart from "../sidePart/SidePart"
import FlyoutLink from "../Flycontent/FlyoutLink"
import ElectronicAccess from "../Flycontent/allFlyContent/electronicsAccess"
import GamingAccess from "../Flycontent/allFlyContent/gaming"
import AudioAccess from "../Flycontent/allFlyContent/audioAccess"
import TvAccess from "../Flycontent/allFlyContent/tvAccess"
import MoblieAccess from "../Flycontent/allFlyContent/mobile&acces"
import Header from "../header/header"

const MobileItem = () => {
    
    
    const elecHeader = 
        ["Mobile & Accessories","Electronic","Gaming & Accessories","TV & Home Entertainment","Audio"]
    
    
    
        const { product, setProduct } = useContext(ProductContext)
    
        useEffect(() => {
            getAllProducts()
                .then(data => setProduct(data) )
                .catch(e => console.log("while getting product", e))              
        }, [])
    
        const renderProduct = () => {
    
            const filterProduct = product.filter((product) => product.category === 'mobile')
    
           return filterProduct.map((product) => <ElectronicProduct key={product.id} product={product} />)
        }
        
      return (
        <div className="w-full ">
            <Header />
            <div className=" flex flex-row items-center justify-start h-14 gap-4 pl-8 bg-white ">
                <div className="text-sm font-bold cursor-pointer">{elecHeader[0]}</div>
                {elecHeader.slice(1).map((items, index) => <div className="text-[12px] sm:block hidden cursor-pointer relative group" key={index}>{items}
                <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>

                
                {items === "Mobile & Accessories" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[220px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div> 
                    <FlyoutLink FlyoutContent={MoblieAccess} elecHeader={elecHeader[0]} />
                </span>} 
                {items === "TV & Home Entertainment" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[450px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div> 
                    <FlyoutLink FlyoutContent={TvAccess} elecHeader={elecHeader[0]} />
                </span>}
                {items === "Audio" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[555px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div> 
                    <FlyoutLink FlyoutContent={AudioAccess} elecHeader={elecHeader[0]} />
                </span>}
                {items === "Gaming & Accessories" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[310px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div> 
                    <FlyoutLink FlyoutContent={GamingAccess} elecHeader={elecHeader[0]} />
                </span>}
                {items === "Electronic" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[205px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div> 
                    <FlyoutLink FlyoutContent={ElectronicAccess} elecHeader={elecHeader[0]} />
                </span>}

                </div>)}
            </div>
            <div className="flex flex-row ">
                <div className="sm:block hidden border border-l-2 w-72  bg-white">
                    <SidePart category={elecHeader[0]}/>
                </div>
                <div className=" border w-full ">
                    <img src={banner1} alt="" />
                    <img src={banner2} alt="" />
                    <img src={banner3} alt="" />
                    <img src={banner4} alt="" /> 
                    <div className="gap-5 grid sm:grid-cols-3 p-4 grid-cols-1 items-center justify-between">
                        {renderProduct()}
                    </div>                
                </div>             
            </div>
            <Footer />
        </div>
      )
    
    
    
}

export default MobileItem
import { useContext, useEffect } from "react"
import banner1 from "../../assets/Banner1Elec.gif"
import banner2 from "../../assets/Banner2Elec.jpg"
import banner3 from "../../assets/Banner3Elec.jpg"
import banner4 from "../../assets/Banner4Elec.gif"
import { ProductContext } from "../../routes/routes"
import { getAllProducts } from "../../apis"
import ElectronicProduct from "../../components/electronicProduct/ElectronicProduct"
import SidePart from "../../components/sidePart/SidePart"
import FlyoutLink from "../../components/Flycontent/FlyoutLink"
import MoblieAccess from "../../components/Flycontent/allFlyContent/mobile&acces"
import TvAccess from "../../components/Flycontent/allFlyContent/tvAccess"
import GamingAccess from "../../components/Flycontent/allFlyContent/gaming"
import ElectronicAccess from "../../components/Flycontent/allFlyContent/electronicsAccess"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"

const elecHeader = 
    ["Audio","Electronic","Gaming & Accessories","TV & Home Entertainment","Mobile & Accessories"]

const MobileHead = ( ) => {

    const { product, setProduct } = useContext(ProductContext)

    useEffect(() => {
        getAllProducts()
            .then(data => setProduct(data) )
            .catch(e => console.log("while getting product", e))              
    }, [])

    
    
    const renderProduct = () => {

        const filterProduct = product.filter((product) => product.category === 'mobile'  ||  product.category ==="audio")

       return filterProduct.map((product) => {  
        
        return (
            <ElectronicProduct key={product.id} product={product} />
        )
        })
    }
    
    return (
        <div>
        <div className="w-full ">
            <Header />
            <div className=" flex flex-row items-center justify-start h-14 gap-4 pl-8 bg-white ">
                <div className="text-sm font-bold cursor-pointer">{elecHeader[0]}</div>
                {elecHeader.slice(1).map((items, index) => <div className="text-[12px] cursor-pointer relative group sm:block hidden" key={index}>{items}
                <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></div>

                {items === "Mobile & Accessories" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[490px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div>
                    <FlyoutLink FlyoutContent={MoblieAccess} elecHeader={elecHeader[0]} />
                </span>} 
                {items === "TV & Home Entertainment" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[350px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div>
                    <FlyoutLink FlyoutContent={TvAccess} elecHeader={elecHeader[0]} />
                </span>}                
                {items === "Gaming & Accessories" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[200px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div>
                    <FlyoutLink FlyoutContent={GamingAccess} elecHeader={elecHeader[0]} />
                </span>}
                {items === "Electronic" &&                   
                <span className="fixed left-0 hidden group-hover:block bg-transparent w-screen">
                    <div className="h-4 w-4 translate-x-[106px] translate-y-1/2 rotate-45 bg-white border-l border-t border-gray-200"></div>
                    <FlyoutLink FlyoutContent={ElectronicAccess} elecHeader={elecHeader[0]} />
                </span>}


                </div>)}
            </div>
            <div className="flex flex-row ">
                <div className=" border border-l-2 w-72  bg-white sm:block hidden">
                    <SidePart category={elecHeader[0]}/>
                </div>
                <div className=" border w-full ">
                    <img src={banner1} alt="" />
                    <img src={banner2} alt="" />
                    <img src={banner3} alt="" />
                    <img src={banner4} alt="" /> 
                    <div className="gap-4 grid grid-cols-1 sm:grid-cols-3  p-4">
                        {renderProduct()}
                    </div>                
                </div>             
            </div>
            
        </div>
        <Footer />
        </div>
    )
}

export default MobileHead
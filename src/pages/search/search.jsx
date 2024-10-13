import { useContext } from "react"
import { ProductContext } from "../../routes/routes"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import banner1 from "../../assets/Banner1Elec.gif"
import banner2 from "../../assets/Banner2Elec.jpg"
import banner3 from "../../assets/Banner3Elec.jpg"
import banner4 from "../../assets/Banner4Elec.gif"
import SidePart from "../../components/sidePart/SidePart"
import ElectronicProduct from "../../components/electronicProduct/ElectronicProduct"

const SearchProduct = () => {

    const { searchProduct } = useContext(ProductContext)
     
    console.log("getting",searchProduct)

    const renderProduct = () => {
        return (
            searchProduct.map((product) => 
                <ElectronicProduct key={product.id} product={product} />
            )
        )
    }
    
    return (
        <div className="flex flex-col w-full h-full">
            <Header />

            <div className="flex flex-row ">
                <div className=" border border-l-2 w-72 bg-white">
                    <SidePart/>
                </div>
                <div className=" border w-full h-full">
                    <img src={banner1} alt="" />
                    <img src={banner2} alt="" />
                    <img src={banner3} alt="" />
                    <img src={banner4} alt="" /> 
                    <div className=" gap-4 grid grid-cols-3 p-4 ">                        
                        {renderProduct()}
                    </div>                
                </div>             
            </div>

            <Footer />
        </div>
    )
}

export default SearchProduct
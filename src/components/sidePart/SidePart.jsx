import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const categories = [
    "Tv & Home Entertainment",
    "Electronic",
    "Mobile & Accessories",
    "Gaming Accessories",
    "Audio"
]


const SidePart = ( { category } ) => {

    const navigate = useNavigate()

    const allCategories = () => 
        categories.map((item, i) => {
            return(
            <h5 key={i} onClick={() => goToPage(item)} className={`text-sm cursor-pointer hover:text-red-700 ${item === category ? "font-bold" : ""}`}>
                {item}
            </h5>)
        }
    ) 
    
    const goToPage = (item) => {
        if(item === "Electronic"){
            navigate("/electronics")
        }else if(item === "Mobile & Accessories"){
            navigate("/mobiles")
        }else if(item === "Gaming Accessories"){
            navigate("/gaming")
        }else if(item === "Audio"){
            navigate("/tvheadphone")
        }else if(item === "Tv & Home Entertainment"){
            navigate("/tvs")
        }
    }
    
    
    

  return (
    <div className="flex flex-col flex-wrap gap-4 p-2">
        <div className="">
            <h3 className="font-bold text-sm">Deals & Discounts</h3>
            <h5 className="text-sm font-semibold cursor-pointer hover:text-red-700">All Discounts</h5>
            <h5 className="text-sm font-semibold cursor-pointer hover:text-red-700">Today's Deals</h5>
        </div>

        <div className=" flex flex-col ">
            <h3 className="font-bold text-sm">Amazon Prime</h3>
            <div className="flex items-center text-sm font-extrabold"> 
                <FontAwesomeIcon icon={faCheck} className=" text-yellow-600  h-4 w-4"/>
                <h5 className="text-blue-400">Prime</h5>
            </div>
        </div>

        <div className="">
            <h3 className="font-bold text-sm">Category</h3>
            <div className="pl-4">
                {allCategories()}
            </div>                
        </div>
            
        <div className="">
            <h3 className="font-bold text-sm">Discounts</h3>
            <h5 className="text-sm cursor-pointer hover:text-red-700">10% Off or more</h5>
            <h5 className="text-sm cursor-pointer hover:text-red-700">25% Off or more</h5>
            <h5 className="text-sm cursor-pointer hover:text-red-700">35% Off or more</h5>
            <h5 className="text-sm cursor-pointer hover:text-red-700">50% Off or more</h5>
            <h5 className="text-sm cursor-pointer hover:text-red-700">60% Off or more</h5>
            <h5 className="text-sm cursor-pointer hover:text-red-700">70% Off or more</h5>
        </div>
    </div>
    
  )
}

SidePart.propTypes = {
    category : PropTypes.array
}

export default SidePart
import amazonLogo from "../../../assets/whitelogo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCartPlus, faSearch } from "@fortawesome/free-solid-svg-icons"
import { Link, useNavigate } from "react-router-dom"
import { createContext, useContext, useState } from "react"
import { AuthContext } from "../../auth/authContext"
import {  signOut } from "firebase/auth"
import { ProductContext } from "../../../routes/routes"

export const ProductSearch = createContext()

const HeaderBelt = () => {

    const { auth } = useContext(AuthContext) 
    const { product, search, setSearch, searchProduct, setSearchProduct } = useContext(ProductContext)  
    const [suggestions, setSuggestions] = useState([]);
    
    const navigate = useNavigate()

    const signOff = async () => {    
        try{          
          await signOut(auth)          
          if(auth){
            navigate('/')
          }                  
        }catch(e){
            console.log(e)                  
        }              
    }
    
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearch(value);
        if (value.trim() === "") {
            setSuggestions([])
        } else {
            getProduct();
        }
    };
    

    const getProduct = () => {
        const filterProduct = product.filter( product => product.title.toLowerCase().includes(search.toLowerCase())) 
        setSearchProduct(filterProduct)  
        setSuggestions(filterProduct)        
       
    }

    console.log(suggestions)

      
    
    const getSearchProduct = () => {
        if(search.length > 0){
            getProduct()
            navigate("/search")
            setSearch("") 
        }     
    }     

    const handleProduct = (id) => {
        setSuggestions([])
        navigate(`/product/${id}`) 
        setSearch("")       
    }
      
    
    return (
        
        <div className=" border border-black w-full h-16 p-2 flex flex-row justify-between bg-black fixed top-0 left-0 right-0 z-40">
            <Link to={"/"} className=" border border-black w-[150px] p-2 h-full flex items-center text-white hover:border-white cursor-pointer">
                <img src={amazonLogo} alt="Logo" />                
            </Link>
            
            <div className="h-full flex flex-row justify-center ml-1 mr-1 flex-grow items-center">
                <div className=" border border-black w-[70px] h-full rounded-l-md bg-gray-200 flex justify-center items-center gap-2 cursor-pointer">
                    <h1 className=" text-sm">All</h1>
                    <FontAwesomeIcon icon={faCaretDown} />                    
                </div>
                <div className="border border-black h-full w-full relative">
                    <input type="text" onKeyDown={getProduct} className=" w-full px-2 h-full outline-none" value={search} onChange={handleSearchChange} />
                    {suggestions.length > 0 && 
                        <div className="absolute bg-white border border-gray-300 w-full z-10 max-h-[50vh] overflow-y-auto">
                            {suggestions.map((suggestion) => (
                                <div key={suggestion.id}
                                    onClick={() => handleProduct(suggestion.id)}                              
                                    className="px-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    {suggestion.title}
                                </div>
                            ))}
                        </div>
                    }

                </div>
                <div onClick={getSearchProduct} className=" w-[50px] h-[96%] flex items-center justify-center cursor-pointer ml-[1.5px] bg-yellow-300 rounded-r-sm">
                    <FontAwesomeIcon icon={faSearch}/>
                </div>                
            </div>

            {!auth?.currentUser ? <Link to={"/login"} className="relative group hover:border hover:border-white cursor-pointer flex-col text-white flex  justify-center text-left items-center px-2 w-44">
                <div className="flex flex-col">
                    <h3 className=" text-[10px] text-left">Login, sign in</h3>
                    <div className="hidden sm:flex flex-row  gap-2">
                        <h3 className="  font-bold">Account & List</h3>
                        <div className="flex pt-1 text-sm text-gray-400">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>                    
                    </div> 
                </div>    

                <div className=" absolute group-hover:block hidden bg-transparent -left-44 top-9 w-[400px] bg-gray-800 z-50">
                    <div className="w-3 h-3 bg-white border-l rotate-45 translate-y-1/2 translate-x-[317px] ">                        
                    </div>
                    <div className="w-full  bg-white shadow-2xl rounded-md border border-gray-300 p-4 flex flex-col gap-4 ">
                        <div className="flex  flex-col justify-center items-center p-2 gap-3">
                            <div className="py-2 px-24 text-sm rounded-md bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center shadow-2xl">Sign In</div>
                            <span className="text-sm text-gray-600">New customer? <span className="hover:underline hover:text-red-600 cursor-pointer text-blue-600">Start here.</span></span>
                        </div>                  
                    </div>
                </div>   
                             
            </Link> : <div className="relative group hover:border hover:border-white cursor-pointer flex-col text-white flex  justify-center text-left items-center px-2 w-44 ">
                <div className=" flex flex-col ">
                    <h3 className="sm:block hidden text-[10px] text-left">{auth.currentUser?.email}</h3>
                    <div className=" flex flex-row  gap-2">
                        <h3 className="font-normal text-[10px] sm:text-md sm:font-bold">Account & List</h3>
                        <div className="flex pt-1 text-sm text-gray-400">
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>                    
                    </div> 
                </div>   

                <div className=" absolute group-hover:block hidden bg-transparent sm:-left-72 -left-24 top-9 sm:w-[500px] w-[200px] bg-gray-800 z-50">
                    <div className="w-3 h-3 bg-white border-l rotate-45 translate-y-1/2 sm:translate-x-[430px] translate-x-[145px]">                        
                    </div>
                    <div className="w-full  bg-white shadow-2xl rounded-md border border-gray-300 p-6 flex flex-col gap-4 ">
                        <div className=" rounded-md bg-blue-100 w-full  text-black hidden sm:flex flex-row justify-between py-2 px-3 items-center">
                            <h4 className="text-sm">Who is shopping? Select a profile.</h4>
                            <h3 className="text-md font-semibold text-blue-500 hover:text-red-500 hover:underline">Manage Profiles</h3>
                        </div>
                        <div className="flex flex-col  p-4 items-center justify-center text-black gap-2">
                            <span className="text-sm font-semibold">
                                Your Account
                            </span>
                            <Link to={"/cart"} className="text-sm hover:underline hover:text-red-400">
                                Your Orders
                            </Link >  

                            <div onClick={signOff} className="py-3 mt-6 px-16 text-sm rounded-md bg-yellow-400 hover:bg-yellow-300 text-black flex items-center justify-center shadow-2xl">Sign Out</div>                          
                        </div>                        
                    </div>
                </div>
            </div>}              

            {auth?.currentUser ? <Link to={"/cart"} className=" hover:border hover:border-white w-[50px]  flex items-center justify-center cursor-pointer ml-1 ">
                <FontAwesomeIcon icon={faCartPlus} width={30} height={30} className="text-white"/>
            </Link> :<Link to={"/login"} className=" hover:border hover:border-white w-[50px] flex items-center justify-center cursor-pointer ml-1 ">
                <FontAwesomeIcon icon={faCartPlus} width={30} height={30} className="text-white"/>
            </Link>} 
        </div>
        
    )
}

export default HeaderBelt
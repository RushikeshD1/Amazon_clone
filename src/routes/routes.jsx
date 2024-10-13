import {BrowserRouter, Routes, Route} from "react-router-dom"
import Electronic from "../pages/electronics/electronic"
import { createContext, useEffect, useState } from "react"
import HomePage from "../pages/homepage/homepage"
import TargetProduct from "../pages/targetID/targetProduct"
import MobileItem from "../components/mobileItems/MobileItem"
import TVItems from "../components/tvItems/TVItems"
import MobileHead from "../pages/TvHead/TvHead"
import Gaming from "../pages/gaming/Gaming"
import Cart from "../pages/cart/Cart"
import Login from "../pages/Login/Login"
import AuthContextProvider from "../components/auth/authContext"
import SearchProduct from "../pages/search/search"

export const ProductContext = createContext()


const AppRou = () => {

  const [product, setProduct] = useState([])
  const [cartItem, setCartItem] = useState([]) 
  const [search, setSearch] = useState("")
  const [searchProduct, setSearchProduct] = useState([]) 


  
  return (
    <AuthContextProvider>
    <ProductContext.Provider value={{product, setProduct, cartItem, setCartItem, search, setSearch, searchProduct, setSearchProduct}}>
        <BrowserRouter> 
        <div className="bg-gray-200 flex flex-col min-h-screen"> 
               
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/electronics" element={<Electronic/>}/>
                <Route path="/mobilesheadphone" element={<MobileHead/>}/>
                <Route path="/mobiles" element={<MobileItem/>}/>
                <Route path="/gaming" element={<Gaming/>}/>
                <Route path="/tvs" element={<TVItems/>}/>
                <Route path="/product/:id" element={<TargetProduct/>}/>
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/search" element={<SearchProduct />} />
            </Routes>                
          </div>     
        </BrowserRouter>
        
    </ProductContext.Provider> 
    </AuthContextProvider>   
  )
}

export default AppRou
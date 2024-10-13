import { createContext, useEffect, useState } from "react"
import { getAuth } from "firebase/auth"
import app from "../config/firebase"
 
export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(null)

    useEffect(() => {
        const auth = getAuth(app)
        setAuth(auth) 
    }, [])

    // console.log(auth);
    

   return (
     <AuthContext.Provider value={ { auth, user } }>
        {children}
    </AuthContext.Provider>
   )
}
 
 export default AuthContextProvider
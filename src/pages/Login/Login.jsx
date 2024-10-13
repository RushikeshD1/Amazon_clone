import logo from "../../assets/amazonLogo.png"
import { useContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../components/config/firebase";
import { AuthContext } from "../../components/auth/authContext";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [auth, setAuth] = useState(null)

  // useEffect(()=> {
    // const authInstance = getAuth(app)
    // setAuth(authInstance)
  // }, [])

//  const userData = () => {
    
//     console.log(auth.currentUser)    
//   }
  
  // const signInWithGoogle = async () => {
  //   try{
  //     const auth = getAuth(app)
  //     const provider = new GoogleAuthProvider()

  //     const response = await signInWithPopup(auth, provider)
  //     console.log(response);
      

  //   }catch(e){
  //     console.log(e)
      
  //   }   
  // }
  
  const { auth } = useContext(AuthContext)
  const navigate = useNavigate()


  const registerInWithEmail = async () => {

    try{       
      await createUserWithEmailAndPassword(auth, email, password)
      setEmail("")
      setPassword("")
      if(auth){
        navigate('/')
      }         
    }catch(e){
      console.log(e)      
    }
  }
  
  const signInWithEmail = async () => {
    try{
      const auth = getAuth()
      await signInWithEmailAndPassword(auth, email, password)
      // console.log(response)
      if(auth){
        navigate('/')
      }       
    }catch(e){
      console.log(e)      
    }
  }



  // const signOutWithGoogle = async () => {    
  //      try{
  //       const auth = getAuth()
  //       const response = await signOut(auth)
  //       console.log(response);
        
  //      }catch(e){
  //       console.log(e)
        
  //      }      
  // }

 
  

  return (
    <div className="bg-white h-screen">
        <Link to={"/"} className="flex flex-row relative justify-center">
            <img src={logo} alt="" className="w-44 "/>
            <span className="flex absolute left-[580px] top-7">.in</span>
        </Link>
        <div className="flex justify-center ">
            <div className="border border-gray-200 w-96  rounded-lg p-8 flex flex-col gap-3">
              <h1 className="font-semibold text-3xl">Sign in</h1>
              <div className="flex flex-col w-full">
                <span className="font-semibold text-sm">Email or mobile phone number</span>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-black h-9 rounded-sm px-3 outline-cyan-200"/>
              </div>
              <div className="flex flex-col w-full">
                <span className="font-semibold text-sm">Password</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black h-9 rounded-sm px-3 outline-cyan-200"/>
              </div>
              <button onClick={signInWithEmail} className="flex justify-center items-center bg-yellow-400 text-black p-1 rounded-md text-sm shadow-md hover:bg-yellow-300">continue</button> 
              <span className='text-sm'>By continuing, you agree to Amazon's <span className='underline text-blue-500 hover:text-red-500 cursor-pointer'>Conditions of Use</span> and <span className='cursor-pointer hover:text-red-500 underline text-blue-500 '>Privacy Notice</span>.</span>
              <div className="flex items-center mt-5">
                <div className="flex-grow border-t border-gray-300 mr-2"></div>
                  <span className="font-normal text-[12px] text-gray-400">New to Amazon?</span>
                <div className="flex-grow border-t border-gray-300 ml-2"></div>
              </div>

              <button onClick={registerInWithEmail} className='bg-white mt-2 flex justify-center items-center text-black p-1 rounded-md text-sm shadow-md hover:bg-gray-100 border border-gray-200'>Create Your Amazon Account</button>              
            </div>
        </div>
        
    </div>
  )
}

export default Login
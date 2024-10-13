import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import amazonLogo from "../../../assets/whitelogo.png"
import { faLanguage } from "@fortawesome/free-solid-svg-icons"

const FooterStructure = () => {

    return (
        <div className="w-full sm:h-[500px]  bg-gray-800 text-white font-semibold flex items-center justify-center flex-col ">
            <div className=" w-full h-[300px] border-b-[0.5px] border-gray-400 flex flex-row justify-between items-center px-6">
                <div className=" w-36 h-60 flex flex-col flex-wrap justify-start ">
                    <h3 className="text-xl mb-4">Get To Know Us</h3>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">About Amazon</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Careers</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Press Releases</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Amazon Science</h4>
                </div>
                <div className=" w-36 h-60 flex flex-col flex-wrap justify-start">
                    <h3 className="text-xl mb-4">Connect With Us</h3>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Facebook</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Twitter</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer" >Instagram</h4>
                </div>
                <div className="hidden w-56 h-60 sm:flex flex-col flex-wrap justify-start">
                    <h3 className="text-xl mb-4">Make Money with Us</h3>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Sell on Amazon</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Sell under Amazon Accelerator</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Protect and Build Your Brand</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Amazon Global Selling</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Supply to Amazon</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Become an Affiliate</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Fulfilment by Amazon</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Advertise Your Products</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Amazon Pay on Merchants</h4>
                </div>
                <div className="hidden w-36 h-60 sm:flex flex-col flex-wrap justify-start">
                    <h3 className="text-xl mb-4">Let Us Help You</h3>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Your Account</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Recalls and Product Safety Alerts</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">100% Purchase Protection</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Amazon App Download</h4>
                    <h4 className=" text-sm text-gray-300  hover:underline cursor-pointer">Help</h4>
                </div>
            </div>            
            <div className=" w-full h-[140px] flex sm:flex-row flex-col justify-center items-center ">
                <div className=" w-32 h-12 p-4 flex items-center justify-center cursor-pointer">
                    <img src={amazonLogo} alt="Logo" />
                </div>
                <div className=" w-32 h-12 gap-2  border border-white p-4 hidden sm:flex items-center justify-center ml-16 rounded-md cursor-pointer">
                    <FontAwesomeIcon icon={faLanguage} />
                    <h3 className=" text-sm font-light">English</h3>
                </div>     
                <div className=" w-32 h-12  border border-white p-4 hidden sm:flex items-center justify-center ml-4 rounded-md cursor-pointer">
                    <h3 className=" text-sm font-light">India</h3>
                </div>           
            </div>
        </div>
    )
}
 
export default FooterStructure
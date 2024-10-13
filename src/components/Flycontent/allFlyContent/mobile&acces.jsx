import mobile1 from "../../../assets/mobile1.jpg"
import mobile2 from "../../../assets/headphone1.jpg"

const MoblieAccess = () => {
    

  return (
    <div className="flex flex-row justify-around py-9">
        <div className=" p-2 flex flex-col">
            <div className=" text-md font-bold h-12 "> 
                <h3 className="hover:underline">Mobiles</h3>
                <h3 className="hover:underline">Mobile accessories</h3>
            </div>
            <div className=" flex flex-col gap-1">            
                <h4 className="hover:underline">Chargers</h4>
                <h4 className="hover:underline">Headsets</h4>
                <h4 className="hover:underline">Replacement Parts</h4>
                <h4 className="hover:underline">Data Cables</h4>
            </div>            
        </div>
        <div>
            <div className=" text-md font-bold h-12">
                <h3 className="hover:underline">Mobile brands</h3>

            </div>
            <div className=" flex flex-col gap-1">            
                <h4 className="hover:underline">samsung</h4>
                <h4 className="hover:underline">xiaomi</h4>
                <h4 className="hover:underline">apple</h4>
                <h4 className="hover:underline">redmi</h4>             
            </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-1">            
            <div className=" h-56 w-56">
                <img src={mobile1} className="w-full h-full"/>
            </div>  
            <div className=" text-md font-bold h-12 hover:underline">
                <h3 className="pb-2">Mobiles</h3>
                <span className="font-normal">See more</span>
            </div>          
        </div>
        <div className="flex flex-col items-center justify-center gap-1">
            <div className=" h-44 w-44 pb-2">
                <img src={mobile2} className="w-full h-full"/>
            </div>
            <div className=" text-md font-bold h-12 pt-6 hover:underline">
                <h3 className="pb-2">Mobile Accessories</h3>
                <span className="font-normal">See more</span>
            </div>            
        </div>
    </div>
  )
}

export default MoblieAccess
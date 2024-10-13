import game1 from "../../../assets/sound1.jpg"
import game2 from "../../../assets/sound2.jpg"

const AudioAccess = () => {    

    return (
      <div className="flex flex-row justify-around py-9">
          <div className=" p-2 flex flex-col">
              <div className=" text-md font-bold h-12 "> 
                  <h3 className="hover:underline">Audio</h3>
                  <h3 className="hover:underline">Audio accessories</h3>
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">Wireless Headphone</h4>                  
                  <h4 className="hover:underline"> Wired Earphones</h4>
                  <h4 className="hover:underline">AirPods</h4>
                  <h4 className="hover:underline">Bluetooth Speaker</h4>
                  <h4 className="hover:underline">Ear Earbuds</h4>
                  <h4 className="hover:underline">Multiroom Speaker</h4>
                  <h4 className="hover:underline">Wireless Subwoofer</h4>
                  <h4 className="hover:underline">AirPods</h4>
              </div>            
          </div>
          <div>
              <div className=" text-md font-bold h-12">
                  <h3 className="hover:underline">Audio brands</h3>
  
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">sony</h4>
                  <h4 className="hover:underline">urbanista</h4>
                  <h4 className="hover:underline">xiaomi</h4>  
                  <h4 className="hover:underline">boat</h4>  
                  <h4 className="hover:underline">Sennheiser</h4>           
                  <h4 className="hover:underline">apple</h4>      
                  <h4 className="hover:underline">panasonic</h4>      
                  <h4 className="hover:underline">mivi</h4>      
                  <h4 className="hover:underline">soundcore</h4>      
                  <h4 className="hover:underline">JBL</h4>          
                  <h4 className="hover:underline">Marshall</h4>  
                  <h4 className="hover:underline">Bang & Olufsen</h4>  
                  <h4 className="hover:underline">Denon</h4> 
                  <h4 className="hover:underline">apple</h4>                       
              </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">            
              <div className=" h-56 w-56">
                  <img src={game1} className="w-full h-full"/>
              </div>  
              <div className=" text-md font-bold h-12 hover:underline">
                  <h3 className="pb-2">Audio</h3>
                  <span className="font-normal">See more</span>
              </div>          
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
              <div className=" h-44 w-44 pb-2">
                  <img src={game2} className="w-full h-full"/>
              </div>
              <div className=" text-md font-bold h-12 pt-5 hover:underline">
                  <h3 className="pb-2">Audio Accessories</h3>
                  <span className="font-normal">See more</span>
              </div>            
          </div>
      </div>
    )
  }

export default AudioAccess
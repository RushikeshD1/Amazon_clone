import game1 from "../../../assets/game3.jpg"
import game2 from "../../../assets/game2.jpg"

const GamingAccess = () => {    

    return (
      <div className="flex flex-row justify-around py-9">
          <div className=" p-2 flex flex-col">
              <div className=" text-md font-bold h-12 "> 
                  <h3 className="hover:underline">Game</h3>
                  <h3 className="hover:underline">Gaming accessories</h3>
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">Wireless Gaming Headset</h4>
                  <h4 className="hover:underline">Wireless Gamepad</h4>
                  <h4 className="hover:underline">Mouse</h4>
                  <h4 className="hover:underline">Consoles</h4>
              </div>            
          </div>
          <div>
              <div className=" text-md font-bold h-12">
                  <h3 className="hover:underline">Gaming brands</h3>
  
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">microsoft</h4>
                  <h4 className="hover:underline">logitech G</h4>
                  <h4 className="hover:underline">Amkette</h4>
                  <h4 className="hover:underline">ant esports</h4>     
                  <h4 className="hover:underline">CredevZone</h4>  
                  <h4 className="hover:underline">sony</h4>                         
              </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">            
              <div className=" h-56 w-56">
                  <img src={game1} className="w-full h-full"/>
              </div>  
              <div className=" text-md font-bold h-12 hover:underline">
                  <h3 className="pb-2">Mobiles</h3>
                  <span className="font-normal">See more</span>
              </div>          
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
              <div className=" h-44 w-44 pb-2">
                  <img src={game2} className="w-full h-full"/>
              </div>
              <div className=" text-md font-bold h-12 pt-5 hover:underline">
                  <h3 className="pb-2">Mobile Accessories</h3>
                  <span className="font-normal">See more</span>
              </div>            
          </div>
      </div>
    )
  }

export default GamingAccess
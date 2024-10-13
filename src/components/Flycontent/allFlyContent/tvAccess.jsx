import game1 from "../../../assets/tv1.jpg"
import game2 from "../../../assets/tv2.jpg"

const TvAccess = () => {    

    return (
      <div className="flex flex-row justify-around py-9">
          <div className=" p-2 flex flex-col">
              <div className=" text-md font-bold h-12 "> 
                  <h3 className="hover:underline">TV</h3>
                  <h3 className="hover:underline">Tvs accessories</h3>
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">Wireless Headset</h4>                  
                  <h4 className="hover:underline">Mouse</h4>
                  <h4 className="hover:underline">Consoles</h4>
                  <h4 className="hover:underline">Remote</h4>
              </div>            
          </div>
          <div>
              <div className=" text-md font-bold h-12">
                  <h3 className="hover:underline">TVs brands</h3>
  
              </div>
              <div className=" flex flex-col gap-1">            
                  <h4 className="hover:underline">redmi</h4>
                  <h4 className="hover:underline">samsung</h4>
                  <h4 className="hover:underline">mi</h4>  
                  <h4 className="hover:underline">acer</h4>  
                  <h4 className="hover:underline">LG</h4>                         
              </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-1">            
              <div className=" h-56 w-56">
                  <img src={game1} className="w-full h-full"/>
              </div>  
              <div className=" text-md font-bold h-12 hover:underline">
                  <h3 className="pb-2">TVs</h3>
                  <span className="font-normal">See more</span>
              </div>          
          </div>
          <div className="flex flex-col items-center justify-center gap-1">
              <div className=" h-44 w-44 pb-2">
                  <img src={game2} className="w-full h-full"/>
              </div>
              <div className=" text-md font-bold h-12 pt-5 hover:underline">
                  <h3 className="pb-2">TV Accessories</h3>
                  <span className="font-normal">See more</span>
              </div>            
          </div>
      </div>
    )
  }

export default TvAccess
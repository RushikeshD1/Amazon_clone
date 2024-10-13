import { useNavigate } from 'react-router-dom'
import electronic from '../../assets/electronic.jpg'
import mobiles from '../../assets/mobiles.jpg'
import tv from '../../assets/tvAppliance.jpg'

const productDetails = [
    {
        id : 1,
        title : "Up to 80% off | Electronics & Accessories",
        img : electronic,
        button : "See all offers",
        category : "electronic"
    },
    {
        id : 2,
        title : "Starting ₹6,999 | Mobiles & Audio",
        img : mobiles,
        button : "See all offers",
        category : "mobile"
    },
    {
        id : 3,
        title : "Up to 80% off | Gaming & Accessories",
        img : tv,
        button : "See all offers",
        category : "gaming"
    },    
]

const ProductDeal = () => {

    const navigate = useNavigate()

    const navigateTo = (category) => {
        if(category === "electronic"){
            navigate("/electronics")
        }

        if(category === "mobile"){
            navigate("/mobilesheadphone")
        }

        if(category === "gaming"){
            navigate("/gaming")
        }

    }


  return (
    
    <div className='sm:grid sm:grid-cols-3 grid grid-cols-1 gap-4 mb-4 '>
        {productDetails.map((item) => 
            <div onClick={() => navigateTo(item.category)} className=' h-96 flex justify-between bg-white p-4 flex-col ' key={item.id}>
                <div className='w-full h-18 flex items-start justify-start pb-4'>
                    <p className='font-bold text-xl'>{item.title}</p>
                </div>
                <div className='hover:cursor-pointer hover:text-red-600 text-blue-300'> 
                    <div className='w-full h-64 '>
                        <img src={item.img} alt="" className='h-full' />
                    </div>
                    <div className='w-full h-10 py-1 flex items-center h'>
                        <p className=' text-sm font-semibold '>{item.button}</p>
                    </div>
                </div>               
            </div>
        )}
    </div>       
    
  )
}

export default ProductDeal

const TargetIdMail = ({ product }) => {
  return (
    <div className="  w-[220px] h-[220px] ">
        <div className=" hover:cursor-pointer w-[230px] h-[250px]  flex flex-col flex-wrap bg-#ecf0f1 bg-white  items-center justify-center"> 
        <div className=" h-[210px] ">
            <img className=" w-[100%] h-[210px] " src={product.image} />
        </div>
        </div>
    </div>   


  )
}

export default TargetIdMail
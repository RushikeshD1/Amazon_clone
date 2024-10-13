
const FlyoutLink = ( { FlyoutContent}) => {
        
  return (
    <div className="bg-white  border-y border-gray-200 min-h-[350px]" >
        
        { <FlyoutContent  />}
    </div>
  )
}

export default FlyoutLink

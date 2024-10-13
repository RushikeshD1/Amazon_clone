import Carousel from "react-material-ui-carousel";
import banner1 from "../../assets/amazonBanner1.jpg";
import banner2 from "../../assets/amazonBanner2.jpg";
import banner3 from "../../assets/amazonBanner3.jpg";
import banner4 from "../../assets/amazonBanner4.jpg";
import banner5 from "../../assets/amazonBanner5.jpg";


const image = [banner1, banner2, banner3, banner4, banner5];

const Banner = () => {

  const isMobile = window.innerWidth < 400

  return (
    <Carousel className=" h-[600px] " autoPlay={true} interval={3000} indicators={false} cycleNavigation={true}
    navButtonsWrapperProps = { 
      {style : {position: 'absolute', top : isMobile ? -260 : -150 }}}>      
      {image.map((img, i) => (
        <div key={i} className="flex relative ">
          <img src={img} alt="" className=" absolute object-cover -z-10" />
        </div>
      ))}
    </Carousel>
  )

}

export default Banner

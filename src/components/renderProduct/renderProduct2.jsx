import PropTypes from "prop-types"
import Carousel from 'react-multi-carousel';
import ProductItem from "../product/product"
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5, // Change this to the number of items you want to show
        slidesToSlide: 3 // Number of items to slide at a time
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4, // Adjust as necessary
        slidesToSlide: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const RenderProduct2 = ( { product }) => {

    const renderProducts = () => {

        const filterProduct = product.filter((product) => product.category === "tv")

        return (
            filterProduct.map((product) => 
                <ProductItem key={product.id} product={product}/>
            )
        )
    }

    return (
        <Carousel responsive={responsive} infinite={false} draggable={false} showDots={false} centerMode={false} keyBoardControl={true} dotListClass="custom-dot-list-style" itemClass="carousel-item-padding-10-px" className="flex flex-row  overflow-x-scroll bg-[#ffffff] mx-4 mb-4 ">
                                    
                {renderProducts()}
                
            </Carousel>
    )
}

RenderProduct2.propTypes = {
    product : PropTypes.object,
}

export default RenderProduct2
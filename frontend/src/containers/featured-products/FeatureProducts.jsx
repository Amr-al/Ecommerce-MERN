import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./feature.css";
import fet1 from "../../assests/feature1.jpg";
/* import fet2 from "../../assests/feature2.jpg";
import fet3 from "../../assests/feature3.jpg";
import fet4 from "../../assests/feature4.jpg";
import fet5 from "../../assests/feature5.jpg";
import fet6 from "../../assests/feature6.jpg"; */ 
//import phh from '../../../../Ecommerce-master/backend/clothesStore/mymedia/326131626_602117048406796_3754985323891028938_n.jpg';

import { ProductCard } from '../../components';


  const settings = {
    
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
      responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      
    };

const FeatureProducts = ({products}) => {

  const data = ["Quick view" , "Add to Bag"];
  return (
    <div className='e-commerce-features section__padding'>
      <h2>Featured Products</h2>
      <button className='slick-next'>ekdxklmedkmx</button>
        <Slider {...settings}>
        {
          products.map((product) => (product.featured === true && 
          <ProductCard key={product._id} imageUrl={product.image} data={data} 
                      prodName={product.name} prodPrice={product.price} prodId={product._id}
          />))
        }
        </Slider>
        
    </div>
  )
}

export default FeatureProducts

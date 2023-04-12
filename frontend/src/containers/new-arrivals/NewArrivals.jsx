import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./newarrivals.css";
import fet1 from "../../assests/feature1.jpg";
import fet2 from "../../assests/feature2.jpg";
import fet3 from "../../assests/feature3.jpg";
import fet4 from "../../assests/feature4.jpg";
import fet5 from "../../assests/feature5.jpg";
import fet6 from "../../assests/feature6.jpg";

import { ProductCard } from '../../components';

/* const SlickArrowLeft = () => (
    <button className='slick-prev'>dsjkcnjsd</button>
  ); */

  /* const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ]; */

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

const NewArrivals = ({products}) => {
    const data = ["Quick view" , "Choose option"];
    return (
      <div className='e-commerce-arrivals section__padding'>
        <h2>New Arrivals</h2>
          <Slider {...settings}>
            {
              products.map((product) => (product.newArrival === true && 
              <ProductCard key={product._id} imageUrl={product.image} data={data} 
                           prodName={product.name} prodPrice={product.price} prodId={product._id}
              />))
            }
          </Slider>
          
      </div>
    )
}

export default NewArrivals

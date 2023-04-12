import React from 'react';
import './productcard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({imageUrl,data,prodName,prodPrice,prodId}) => {
  return (
    <Link to={`/${prodId}`} style={{color:'unset' , textDecoration:'none'}}>
      <div className='e-commerce-product-card'>
      <img className='card-imgg' src={imageUrl} alt="" />
      <div className="details">
          {data.map((item,index) =>
            <button key={index} className='card-btn'>{item}</button>
            ) }
      </div>
      <div className="info">
        <p className='name'>{prodName}</p>
        <p>{prodPrice}</p>
      </div>
    </div>
    </Link>
    
  )
}

export default ProductCard;

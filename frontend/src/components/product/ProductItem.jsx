import React from 'react';
import {AiFillCheckCircle ,AiFillCloseCircle} from 'react-icons/ai';
import './product-item.css';

const ProductItem = () => {
  const product = {
    name:"abonesma",
    id:1,
    newArrival:true,
    category:"men",
    section:"casual",
    price:24,
    brand:"adidas",
    size:["small","large"],
    imageUrl:"https://res.cloudinary.com/dm1yzcljo/image/upload/v1680796886/products/o6zxei0ajw1eqafkow24.jpg"
  }
  return (
    <div className='ecommerce-productItem'>
      <div className="left-container">
        <img src={product.imageUrl} alt="" />  
      </div>

      <div className="right-container">
        <p className='prod-name'>{product.name}</p>
        <p className='prod-price'>{product.price}$</p>
        <p className="prod-brand">
          <span>Brand:</span> {product.brand}
        </p>
        <p className='prod-arrival'>New Arrival 
        {product.newArrival?<AiFillCheckCircle style={{color:'green'}}/>:
        <AiFillCloseCircle style={{color:'red'}}/>}</p>
        <p className='prod-brand'><span>Section:</span> {product.section}</p>
        <p className="prod-brand">
          <span>Available Sizes:</span>
          <div style={{display:'flex',gap:'1rem'}}>
            {product.size.map((s,index) => <div key={index} className='prod-size'>
              {s}
            </div>)}
          </div>
          
        </p>
      </div>
    </div>
  )
}

export default ProductItem

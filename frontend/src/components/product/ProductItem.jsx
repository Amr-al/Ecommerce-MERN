import React, {useState,useEffect}from 'react';
import {AiFillCheckCircle ,AiFillCloseCircle} from 'react-icons/ai';
import './product-item.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProductItem = () => {

  const {_id} = useParams();
  const[prod3,setProd3] = useState({});
  
  useEffect(() => {
    getData();
},[])

const getData = async () => {
    let res = await axios.get(`https://cardigan-coypu.cyclic.app/product/`);
    let prod = await res.data;
    prod = prod.filter((p) => p._id === _id);
    setProd3(prod[0]);
    console.log(prod3.sizes[0]);
 }

  return (
    <div className='ecommerce-productItem'>

      <div className="left-container">
        <img src={prod3.image} alt=""/>  
      </div>

      <div className="right-container">
        <p className='prod-name'>{prod3.name}</p>
        <p className='prod-price'>240$</p>
        <p className="prod-brand">
          <span>Brand:</span> {prod3.brand}
        </p>
        <p className='prod-arrival'>New Arrival 
        {prod3.newArrival?<AiFillCheckCircle style={{color:'green'}}/>:
        <AiFillCloseCircle style={{color:'red'}}/>}</p>
        <p className='prod-brand'><span>Section:</span> {prod3.section}</p>
        <p className="prod-brand">
          <span>Available Sizes:</span>
          <div style={{display:'flex',gap:'1rem'}}>
            {prod3.sizes?.map((s,index) => <div key={index} className='prod-size'>
              {s}
            </div>)}
          </div>
          
        </p>
      </div>
    </div>
  )
}

export default ProductItem

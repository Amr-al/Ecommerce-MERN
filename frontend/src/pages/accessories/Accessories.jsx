import React from 'react'
import CatPage from '../cat-page/CatPage';
import accessimg from '../../assests/acesspage.jpg';

const Accessories = ({products}) => {
  const data = ["All","Hats","Bags","Belts"];
  //let accessProducts = products.filter((product) => product.Category?.name === "accessories");

  return (
    <div>
      <CatPage image={accessimg} anwa3Lebs={data} pagee='Accessories'/>
    </div>
  )
}

export default Accessories;

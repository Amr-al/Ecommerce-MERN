import React from 'react';
import CatPage from '../cat-page/CatPage';
import womanimg from '../../assests/womanpage.jpg';

const Women = ({products}) => {
  const data = ["All","Dressy","Casual","Pajamas","swimwear","underwear"];
  //let womenProducts = products.filter((product) => product.category === "Women");
  return (
    <div>
      <CatPage image={womanimg} anwa3Lebs={data} pagee='Women'/>
    </div>
  )
}

export default Women;

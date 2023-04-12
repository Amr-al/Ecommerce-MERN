import React from 'react';
import CatPage from '../cat-page/CatPage';
import manImg from '../../assests/man.jpg'

const Men = () => {

  const data = ["All","Classic","Casual","Pajamas","swimwear","underwear"];
  //let menProducts = products.filter((product) => product.Category?.name === "men");

  //console.log(menProducts);

  return (
    <div>
      <CatPage image={manImg} anwa3Lebs={data} pagee='men'/>
    </div>
  )
}

export default Men;

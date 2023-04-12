import React, { useState , useEffect} from 'react';
import { Route , Routes } from 'react-router-dom';
import {Home , Men ,Women ,Accessories,Collection} from './pages';
import './App.css';
import Header from './components/header/Header';
import { Footer } from './containers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/user/Signin';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
import ProductItem from './components/product/ProductItem';
import axios from 'axios';


function App() {
  const[products,setProducts] = useState([]);
  
  useEffect(() => {
    let getProducts = async () => {
      const res = await axios.get(`https://cardigan-coypu.cyclic.app/product/`);
      setProducts(res.data);
      console.log(res.data);
    };


    getProducts();
  }, []);
  console.log(products);

  return (
    <div className="App" style={{width:'100%'}}>
      <Header />

       <Routes>

          <Route exact path="/"  element={<Home products={products}/>}/>
          <Route path="/men"  element={<Men />}/>
          <Route path="/profile"  element={<Profile/>}/> 
          <Route path="/signin"  element={<Signin/>}/> 
          <Route path="/register"  element={<Register/>}/> 
          <Route path="/women"  element={<Women />}/>   
          <Route path="/accessories"  element={<Accessories />}/> 
          <Route path="/collections"  element={<Collection />}/> 
          <Route path="/:_id"  element={<ProductItem />}/> 
        </Routes>

        <Footer />
    </div>
  );
}

export default App;

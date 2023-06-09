import React, { useEffect } from "react";
import Style from "./AuthStyle.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signin() {
  
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Sign = async (e) => {
    e.preventDefault();
    console.log(email, password);
    let res = await axios.post(
      "https://cardigan-coypu.cyclic.app/auth/signin",
      {
        email:email,
        password:password
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
   // console.log(res);
    if(res.status == 200){
      localStorage.setItem('auth', res.data.token);
      navigate('/')
    }else{
 //     console.log(res.data);
      window.location.reload()
    }
  };
  useEffect(()=>{
    if(localStorage.getItem('auth'))
    navigate('/profile')
  },[])
  return (
    <div className={Style.Auth_form_container}>
      <form className={Style.Auth_form} onSubmit={Sign}>
        <div className={Style.Auth_form_content}>
          <h3 className={Style.Auth_form_title}>Sign In</h3>
          <div className="form-group mt-3">
            <label>Email </label>
            <input
              type="text"
              name="email"
              className="form-control mt-1"
              placeholder="Enter UserName"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
          <p
            className="forgot-password text-center mt-2"
            style={{ paddingTop: "10px" }}
          >
            <b>
              <a href="/register">register?</a>
            </b>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;

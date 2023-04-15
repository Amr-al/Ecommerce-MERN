import React, { useContext } from "react";
import Style from "./AuthStyle.module.css";
import axios from "axios";

function Register() {
  const signup = async (e) => {
    e.preventDefault();

    let response = await axios.post(
      "https://cardigan-coypu.cyclic.app/auth/signup",
      {
        email: e.target.email.value,
        name:e.target.name.value,
        password:e.target.password1.value,
        password2:e.target.password2.value
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();
    console.log(response);
    if (response.status == 200)
      window.location.replace("http://127.0.0.1:3000/login");
  };
  return (
    <div className={Style.Auth_form_container}>
      <form className={Style.Auth_form} onSubmit={signup}>
        <div className={Style.Auth_form_content}>
          <h3 className={Style.Auth_form_title}>Sign up</h3>
          <div className="form-group mt-3">
            <label>User Name</label>
            <input
              type="text"
              name="name"
              className="form-control mt-1"
              placeholder="Enter UserName"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              name="password1"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="password2"
              className="form-control mt-1"
              placeholder="Enter password"
              required
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
              <a href="/signin">login?</a>
            </b>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
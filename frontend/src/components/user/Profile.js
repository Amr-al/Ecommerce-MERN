import React, { useEffect, useState } from "react";
import style from "./profile.module.css";
import { decodeToken } from "react-jwt";
import axios from "axios";
function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("***********");
  const [password2, setConPassword] = useState("***********");
  const [erorr, setErorr] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("auth");
    setName(decodeToken(token).name);
    setEmail(decodeToken(token).email);
  }, []);
  const update = async (e) => {
    e.preventDefault();
    setErorr("");
    let token = localStorage.getItem("auth");
    let id = decodeToken(token)._id;
    let res = await fetch("http://127.0.0.1:8000/auth/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
        password2,
        id,
      }),
    });
    console.log(res.status);
    if (res.status == 200) {
      res = await res.json();
      token = res.token;
      localStorage.setItem("auth", res.token);
      window.location.reload()
    } else {
      setErorr("password must be equal");
    }
    console.log(erorr);
  };
  return (
    <form className={style.container} onSubmit={update}>
      <h1>Profile Setting</h1>
      <div className={style.container2}>
        <img src="https://cdn-icons-png.flaticon.com/512/3917/3917711.png" />
      </div>
      <label>User Name</label>
      <input
        type="text"
        placeholder={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <label>Email</label>
      <input type="text" placeholder={email} readonly="readonly" />
      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      ></input>
      <label>Confirm Password</label>
      <input
        type="password"
        value={password2}
        onChange={(e) => {
          setConPassword(e.target.value);
        }}
      />
      {erorr != "" && (
        <p style={{ color: "red", margin: "auto", marginBottom: "10px" }}>
          {" "}
          {erorr}
        </p>
      )}
      <button
        type="submit"
        className="btn btn-dark"
        style={{ width: "150px", margin: "auto" }}
      >
        Confirm
      </button>
    </form>
  );
}

export default Profile;

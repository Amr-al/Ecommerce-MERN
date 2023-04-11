import React from "react";
import style from "./profile.module.css";
function Profile() {
  
  return (
    <div className={style.container}>
      <h1>Profile Setting</h1>
      <div className={style.container2}>
        <img src="https://cdn-icons-png.flaticon.com/512/3917/3917711.png" />
      </div>
      <label>User Name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="text"></input>
      <label>Password</label>
      <input type="password"></input>
      <label>Confirm Password</label>
      <input type="password"></input>
    </div>
  );
}

export default Profile;

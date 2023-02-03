import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import "./header.css";
// import "./headerResponsive.css";
import pic4 from "../images/WhatsApp-Image11.jpg"


const Header = () => {
  return (
    <div className="header">
    <div className="header__fadeTop">
         <img src={pic4}/>
      <div className="header__options">
        <ul>
          {/* <Link to="/">
            <li>Home</li>
          </Link> */}
          <li>ABOUT US</li>

          <li>SERVICES</li>
          {/* <li onClick={() => history.push("/about")}>About</li> */}

          <li>RESOURCES</li>
          <li>CAREERS</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Header
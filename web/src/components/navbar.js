import React from "react";
import '../Scss/components/navbar.css';
import logo from '../static/earth.png';
import menu from '../static/menu.png'
const NavBar = () => {
    return (
        <>
            <div className="nav">
                <img src={logo} className="logo"/>
                {/* <a className="header">Admin</a> */}
                {/* <img src={menu} className="nemu" /> */}
            </div>
        </>
    );
  }

  export default NavBar;
  
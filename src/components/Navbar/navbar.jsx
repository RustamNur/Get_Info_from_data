import React from "react";
import "../../bootstrap-5.0.2-dist/bootstrap-5.0.2-dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
import {Link,Cont} from "./navbar.js"


const Navbarr = () => {
  return (
      <Cont>
         <Link className={({isActive})=> isActive && "actived"} exact to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/pages">Pages</Link>
         <Link to="/templates">Templates</Link>
         <Link to="/contacts">Contacts</Link>
      </Cont>
  );
};

export default Navbarr;

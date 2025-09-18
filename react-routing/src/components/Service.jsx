import React from "react";
import "../components/navbar/Navbar.css";
import { Link } from "react-router";
import { Outlet } from "react-router";

const Service = () => {
  return (
    <>
     <>
         <div className="service">
           <div className="heading">
             <h1>Service Page</h1>
           </div>
           <h6>Our Page help you to know about React router...</h6>
               <div>
           <Link to={'tech'}>Tech Service</Link>
         </div>
         </div>
     
         <Outlet/>
         </>
    </>
  );
};

export default Service;

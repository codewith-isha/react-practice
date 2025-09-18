import React from "react";
import { Link, Outlet } from "react-router";

const About = () => {
  return (<>
    <div className="service">
      <div className="heading">
        <h1>About Page</h1>
      </div>
      <h6>Our Page help you to know about React router...</h6>
          <div>
      <Link to={'aboutme'}>About-me</Link>
    </div>
    </div>

    <Outlet/>
    </>
  );
};

export default About;

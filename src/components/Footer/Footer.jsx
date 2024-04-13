import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
          we're here to curate an experience tailored to you. At our sanctuary of tranquility, your peace of mind is not just a promise but our foremost priority.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+91 8208402111</p>
          <p>8177vijayrajput@gmail.com</p>
          <p>© All Rights Reserved By vijay.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from 'react';
import { Navbar } from '../../common' ;
import Logo from "./logo.png";

import './Header.css';

const Header = () => {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">
            <img src={Logo} alt="" />
          </a>
        </section>
        <section className="header-top_navbar">
          <section className="header-top_navigation">
            <Navbar />
          </section>
          <hr className="header-top_seperator" />
        </section>
      </section>
    </section>
  )
}

export default Header; 
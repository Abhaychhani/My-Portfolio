import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header container">
      <section className="header-left">
        <span className="hi">Hi There <span>👋</span></span>
        <h1 className="main-text">
          I am
          <ul className="animated-text">
            <li>Abhay<span>🥰</span></li>
            <li>Designer<span>🔥</span></li>
            <li>developer<span>🚀</span></li>
          </ul>
        </h1>
        <span className="tagline">here is tag line!</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quam
          earum provident sint sed non et esse ipsum illum maxime maiores
          ratione quis laborum dicta blanditiis in nulla, accusamus quibusdam!
        </p>
        <button className="contact-btn">Contact Me</button>
      </section>
      <section className="header-right">
        <div className="my-img"></div>
      </section>
    </header>
  );
}

export default Header;

import React from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/main">
          <img src="./pics/LOGON2.jpg" alt="logo" />
        </a>
      </div>
      <div className="menu">
        <a href="/menu"> меню </a>
      </div>
      <div className="order"> на заказ</div>
      <div className="delivery">доставка</div>
      <div className="contacts">контакты</div>
      <div className="accountImage">
        <a href="/auth">
          <img src="./pics/accN.png" alt="accImg" />
        </a>
      </div>
      <div className="cartImage">
        <img src="./pics/cartN1.png" alt="cartImg" />
      </div>
      <button className="button"> Позвоните нам </button>
    </header>
  );
}

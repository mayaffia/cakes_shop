import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ButtonsTypes from "../components/ButtonsTypes";


export default function MenuPage() {
  return (
    <div className="menuPage">
      <Header />
      <main className="menuMain">
        <ButtonsTypes />
      </main>
      <Footer />
    </div>
  );
}

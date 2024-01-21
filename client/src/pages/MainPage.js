import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainPage() {
  return (
    <div className="mainPage">
      <Header />
      <main>
        <div className="mainPicAndName">
          <Carousel className="mainPicAndName">
            <Carousel.Item interval={1800}>
              <Image src="./pics/main.jpg" className="mainCake" />
            </Carousel.Item>
            <Carousel.Item interval={1800}>
              <Image src="./pics/cake5.jpg" className="mainCake" />
            </Carousel.Item>
            <Carousel.Item interval={1800}>
              <Image src="./pics/cake2.jpg" className="mainCake" />
            </Carousel.Item>
            <Carousel.Item interval={1800}>
              <Image src="./pics/cake3.jpg" className="mainCake" />
            </Carousel.Item>
          </Carousel>
          <div className="name"> CAKES </div>
        </div>

        <div className="mainText">
          Добро пожаловать в мир волшебства вкуса и неповторимых удовольствий –
          наш уголок сладких наслаждений! Мы рады приветствовать вас на главной
          странице нашего кондитерского производства, где каждое изделие создано
          с любовью и тщательно подобрано для вашего настоящего удовольствия.
        </div>
        <p className="headersText"> о нас</p>
        <div>
          Мы — команда талантливых кондитеров, преданных искусству создания
          неповторимых сладких шедевров. Наш опыт и страсть к кулинарии
          привносят в каждое изделие неповторимый вкус и визуальное очарование.
          Мы используем только лучшие ингредиенты, чтобы удовлетворить самые
          изысканные ваши вкусовые предпочтения.
        </div>

        <p className="headersText"> наши изделия </p>
        <div>
          От изысканных тортов и пирожных до воздушных макаронс и роскошных
          шоколадных конфет – наше меню насыщено разнообразием, способным
          удовлетворить даже самые изысканные вкусовые палитры. Мы гордимся тем,
          что каждое изделие – это произведение искусства, которое принесет
          радость и удовольствие вашему вкусу.
        </div>
      </main>
      <Footer />
    </div>
  );
}

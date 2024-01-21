import React from "react";
import { useState, useEffect, useContext } from "react";
import { Context } from "../index";
import ProductCard from "../components/ProductCard";
import { observer } from "mobx-react-lite";

const ButtonsTypes = observer(() => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    setTypes([]);
    fetch("http://localhost:5000/api/type")
      .then((result) => result.json())
      .then((data) => setTypes(data));
  }, []);

  const [goodsAll, setGoodsAll] = useState([]);
  let [goods, setGoods] = useState([]);
  let count = 10;
  useEffect(() => {
    fetch("http://localhost:5000/api/cake")
      .then((result) => result.json())
      .then((data) => setGoodsAll(data));

    setGoods(goodsAll.slice(0, count));
    console.log("aaa");
    console.log(goodsAll);
    console.log(goods);
  }, []);

  const fn = (typeId) => {
    const goodsT = goodsAll.filter((item) => item.typeId === typeId);
    setGoods(goodsT);
  };

  const more = () => {
    //console.log(typeId);
    count += 10;
    //const goodsT = goodsAll.filter(item => item.typeId === typeId).slice(0, count);
    //console.log(goodsT);
    //goods = goodsT;
    setGoods(goodsAll);
    //alert('aa');
    //navigate('/menu');
  };

  return (
    <div>
      <div className="nameAndDes">
        <p className="typeName"> Cakes </p>
        <div className="description">
          Наши изделия - настоящее воплощение вкуса и радости, сделанные с
          любовью и тщательным вниманием к деталям, чтобы порадовать вас самыми
          великолепными сладкими моментами.
        </div>
      </div>

      <div className="typeButtons">
        {types.map((type) => (
          <button
            className="typeButton"
            onClick={() => fn(type.id)}
            key={type.id}
          >
            {type.name}
          </button>
        ))}
      </div>

      <div className="goodsWrapper">
        {goods.map((good) => (
          <ProductCard
            name={good.name}
            className="card"
            img={good.img}
            price={good.price}
          />
        ))}
      </div>
      <div className="space"> </div>
      <button className="downloadMore" onClick={() => more()}>
        {" "}
        Загрузить еще{" "}
      </button>
    </div>
  );
});

export default ButtonsTypes;

import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function ProductCard({ name, img, price }) {
  const fileName = "http://localhost:5000/" + img;
  console.log(fileName);
  return (
    <Card style={{ width: "18rem" }} className="card">
      <Card.Img variant="top" src={fileName} />
      <Card.Body>
        <Card.Title> {name} </Card.Title>
        <Card.Text>{price} рублей</Card.Text>
        <Button variant="primary" className="cakeCard">
          в корзину
        </Button>
      </Card.Body>
    </Card>
  );
}

import React from "react";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useState, useEffect } from "react";
import { Context } from "../index";

import axios from "axios";

export default function Reg() {
  const { user } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let id = 0;

  let userExists = false;

  const click = async () => {
    userExists = users.some((user) => user.email === email);
    if (!userExists) {
      console.log("false");
      axios.post("http://localhost:5000/api/user/registration", {
        id: ++id,
        email: email,
        password: password,
      });
    } else {
      alert("Пользователь с таким email уже существует");
    }
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([]);
    fetch("http://localhost:5000/api/user/auth")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);

  return (
    <div className="authPage">
      <Header />
      <main>
        <div className="window">
          <p className="header">Регистрация</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="label">Введите email</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                className="box"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="label">Введите пароль</Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                className="box"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <button className="buttonLog" onClick={click}>
              {" "}
              Зарегистироваться
            </button>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

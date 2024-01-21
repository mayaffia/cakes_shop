import React from "react";
import Form from "react-bootstrap/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState, useEffect, useContext } from "react";
import { Context } from "../index";

import { useNavigate } from 'react-router-dom';
import { createContext } from "react";



export default function AuthPage() {
  const { user } = useContext(Context);

  //const {isAuthenticated} = useContext(AuthContext);
  //const [isAuthenticated, setAuth] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let id = 0;

  let userExists = false;
  let passwordTrue = false;

  const navigate = useNavigate();

  const click = async () => {
    /*await $host.post('api/user/registration', {id : ++id, email : email, password : password})*/

    userExists = users.some((user) => user.email === email);
    if (!userExists) {
      alert("Неверный email");
    } else {
      const userR = users.find(user => user.email === email);
      if (password === userR.password) {
          user.isAuth = false;
          //alert(user.isAuth)
          //setAuth(true);
          //<AuthContext.Provider value={true}></AuthContext.Provider>
          //alert(isAuthenticated);
          //loggedIn = true;
          //alert(loggedIn);
           navigate("/menu");
      } else {
        alert("Неверный пароль");
      }
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
          <p className="header">Войти в аккаунт </p>
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
                onChange={(p) => setPassword(p.target.value)}
              />
            </Form.Group>

            <button className="buttonLog" onClick={click}>
              {" "}
              ВОЙТИ В АККАУНТ{" "}
            </button>
          </Form>
          <div className="noAcc">
            Нет аккаунта?
            <a href="/reg" className="reg">
              {" "}
              Зарегистироваться{" "}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/MainPage.css';
import './pages/AuthPage.css';
import './pages/MenuPage.css';
import './components/Header.css';
import './components/Footer.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserData from './data/UserData';
import GoodsData from './data/GoodsData';


export const Context = createContext(null);

/*ReactDOM.render(
  <Context.Provider value={{
      user: new UserData(),
      device: new GoodsData(),
  }}>
      <App />
  </Context.Provider>,
document.getElementById('root')
);*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserData(),
    good: new GoodsData(),
}}>
    <App />
</Context.Provider>,
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

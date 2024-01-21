import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AuthPage from "./pages/AuthPage";
import MenuPage from "./pages/MenuPage";
import NoAccess from "./pages/NoAccess";
import Reg from "./pages/Reg";
import { useContext } from "react";
import {Context} from "./index"
import { AuthContext } from "./pages/AuthPage";
import { isAuth } from "./pages/AuthPage";


function App() {
  const {user} = useContext(Context)
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/main" exact Component={MainPage} />
          <Route path="/auth" exact Component={AuthPage} />
          {user.isAuth ?  <Route path="/menu" exact Component={MenuPage} /> :
                    <Route path="/menu" exact Component={NoAccess} />}
          <Route path="/reg" exact Component={Reg} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

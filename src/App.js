import  React, {useState} from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp'
import './App.css';
import AppContext from "./context/AppContext";

function App() {

  const [isMarried, setIsMarried] = useState(false);
  const [hasChildren, setHasChildren] = useState(0);

  const setting = {
    isMarried : isMarried,
    setIsMarried,
    hasChildren : hasChildren,
    setHasChildren,
  }

  return (
    <AppContext.Provider  value = { setting } >
      <div className="App">
        <BrowserRouter>
              <Routes>
                <Route index path={'/'} element = {<Login />}></Route>
                <Route path = {'/home'} element = {<Home />}></Route>
                <Route path = {'/login'} element = {<Login />}></Route>
                <Route path = {'/signup'} element = {<SignUp />}></Route>
              </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;

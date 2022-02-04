import  React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from './pages/signup/SignUp'
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
            <Routes>
              <Route index path={'/'} element = {<Home />}></Route>
              <Route path = {'/home'} element = {<Home />}></Route>
              <Route path = {'/login'} element = {<Login />}></Route>
              <Route path = {'/signup'} element = {<SignUp />}></Route>
            </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

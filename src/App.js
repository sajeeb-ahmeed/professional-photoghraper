import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Verification/Login/Login';

function App() {
  return (
    <div>
      <Header></Header>
      <Login></Login>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>

    </div>
  );
}

export default App;

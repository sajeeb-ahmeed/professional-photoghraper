import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Banner from './Pages/Banner/Banner';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
    </div>
  );
}

export default App;

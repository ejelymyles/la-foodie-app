import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePage';
import RestaurantPage from './Components/RestaurantPage';
import RestaurantForm from './Components/RestaurantForm';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes>
          <Route path='/add' element={<RestaurantForm />} />
          <Route path='/restaurants' element={<RestaurantPage />} />
          <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePage';
import Filter from './Components/Filter';
import RestaurantPage from './Components/RestaurantPage';

function App() {
  return (
    <div className="App">
      LA Foodie App
    </div>
  );
}

export default App;

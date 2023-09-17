import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import Filter from './Components/Filter';
import RestaurantPage from './Components/RestaurantPage';
import RestaurantForm from './Components/RestaurantForm';
import Header from './Components/Header';

function App() {

const[resyData, setResyData] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/restaurants")
  .then((r) =>r.json())
  .then((restaurants) => {
    setResyData(restaurants);
  })
}, [])

function newResy (newPlace){
  setResyData((prevData) => [...prevData, newPlace ]);
}

  return (
    <div>
      <Header />
      <Routes>
          <Route path='/add' element={<RestaurantForm newResy={newResy} />} />
          <Route path='/restaurants' element={<RestaurantPage restaurants={resyData} />} />
          <Route exact path='/' element={<Filter restaurants={resyData} />} />
      </Routes>
    </div>
  );
}

export default App;

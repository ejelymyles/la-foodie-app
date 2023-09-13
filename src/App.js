import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/HomePage';
import RestaurantPage from './Components/RestaurantPage';
import RestaurantForm from './Components/RestaurantForm';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
          <Route path='/add' element={<RestaurantForm />} />
          <Route path='/restaurants' element={<RestaurantPage />} />
          <Route exact path='/' element={<Home />} />
      </Routes>
      {/* <Switch>
        <Route path='/add'>
          <RestaurantForm/>
        </Route>
        <Route path='/restaurants'>
          <RestaurantPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;

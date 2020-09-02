import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Categories from './Components/Categories/Categories';
import { createContext } from 'react';
import { useState } from 'react';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory]= useState('laptop')


  return (
    
      <CategoryContext.Provider value={[category, setCategory]}>
        <p>Count value: {category}</p>
      <Header ></Header>
      <Home></Home>
      <Shipment></Shipment>
      </CategoryContext.Provider>
      
  );
}

export default App;

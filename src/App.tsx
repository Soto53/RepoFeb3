import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ArrayManipulator} from "./components/arrayMan";
import {AddNumber} from "./components/numberInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Array Manipulation App</h1>
        
      </header>
      <AddNumber/>
      <ArrayManipulator 
      // numbersArray = {numbers}
      // nameArray = {names}
      />
    </div>
  );
}

export default App;

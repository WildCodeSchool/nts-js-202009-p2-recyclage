import React from 'react';
import IntroCarte from "./components/IntroCarte.jsx"
import Header from './components/Header';
import './App.css';
import FilterList from './components/FilterList';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <IntroCarte />
      <FilterList />
    </div>
  );

}

export default App;

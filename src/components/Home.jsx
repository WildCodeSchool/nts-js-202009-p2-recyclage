import React from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Title from './Title';
import FilterList from './FilterList';

function Home() {
  return (
    <div className="home">
      <Header />
      <Title />
      <IntroCarte />
      <FilterList />
    </div>
  );
}

export default Home;

import React from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Title from './Title';
import FilterList from './FilterList';
import MissionBoxContainer from './MissionBoxContainer';

function Home() {
  return (
    <div className="home">
      <Header />
      <Title />
      <MissionBoxContainer />
      <IntroCarte />
      <FilterList />
      <Maps />
      <Footer />
    </div>
  );
}

export default Home;

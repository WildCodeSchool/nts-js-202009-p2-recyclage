import React from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Title from './Title';
import FilterList from './FilterList';
import MissionBoxContainer from './MissionBoxContainer';
import Maps from './Maps';
import Footer from './Footer';

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

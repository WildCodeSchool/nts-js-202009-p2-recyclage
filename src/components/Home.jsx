import React from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Title from './Title';
import FilterList from './FilterList';
import Footer from './Footer';
import Maps from './Maps';


function Home() {
  return (
    <div className="home">
      <Header />
      <Title />
      <IntroCarte />
      <FilterList />
      <Maps />
      <Footer />
    </div>
  );
}

export default Home;

import React, { useState } from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Toggle from './Toggle';
import Title from './Title';
import FilterList from './FilterList';
import MissionBoxContainer from './MissionBoxContainer';
import Maps from './Maps';
import Footer from './Footer';

function Home() {
  const [value, setValue] = useState(false);
  return (
    <div className="home">
      <Header />
      <Title />
      <MissionBoxContainer />
      <IntroCarte />
      <Toggle
        isOn={value}
        onColor="#79E9D0"
        handleToggle={() => setValue(!value)}
      />
      <FilterList />
      <Maps />
      <Footer />
    </div>
  );
}

export default Home;

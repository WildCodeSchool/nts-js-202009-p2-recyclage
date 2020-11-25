import React, { useState } from 'react';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Toggle from './Toggle';
import Title from './Title';
import FilterList from './FilterList';
import MissionBoxContainer from './MissionBoxContainer';
import Maps from './Maps';
import Footer from './Footer';

function Home(props) {
  const [value, setValue] = useState(false);
  const [filter, setFilter] = useState('');

  const barChanged = (jauge) => {
    const { barChangedHome } = props;
    barChangedHome(jauge);
  };

  const gotFilter = (filterValue) => {
    setFilter(filterValue);
  };
  return (
    <div className="home">
      <Header />
      <Title />
      <MissionBoxContainer barChanged={barChanged} />
      <IntroCarte />
      <Toggle
        isOn={value}
        onColor="#79E9D0"
        handleToggle={() => setValue(!value)}
      />
      <FilterList gotFilter={gotFilter} />
      <Maps filter={filter} />
      <Footer />
    </div>
  );
}

export default Home;

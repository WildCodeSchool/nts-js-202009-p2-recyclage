import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import IntroCarte from './IntroCarte';
import Title from './Title';
import FilterList from './FilterList';
import MissionBoxContainer from './MissionBoxContainer';
import Maps from './Maps';
import Footer from './Footer';

function Home(props) {
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
      <FilterList gotFilter={gotFilter} />
      <Maps filter={filter} />
      <Footer />
    </div>
  );
}

export default Home;

Home.propTypes = {
  barChangedHome: PropTypes.func.isRequired,
};

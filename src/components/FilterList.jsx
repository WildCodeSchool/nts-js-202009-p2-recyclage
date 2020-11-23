import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter';

const typeFilter = [
  {
    filterTitle: 'Filtrer par déchets',
    filters: ['Verre', 'Déchet sec', 'Carton', 'Ordure ménagère'],
    id: 1,
  },
  {
    filterTitle: 'Filtrer par type de collecte',
    filters: ['Colonnes enterrées', 'Colonnes aériennes'],
    id: 2,
  },
  {
    filterTitle: 'Lieux et Rdv Tri-sac',
    filters: ['Tri-sac'],
    id: 3,
  },
];

const FilterList = (props) => {
  const { gotFilter } = props;
  const getFilter = (filter) => {
    gotFilter(filter);
  };
  return (
    <div>
      {typeFilter.map((typeFilter) => (
        <Filter getFilter={getFilter} {...typeFilter} key={typeFilter.id} />
      ))}
    </div>
  );
};

FilterList.propTypes = {
  gotFilter: PropTypes.func.isRequired,
};

export default FilterList;

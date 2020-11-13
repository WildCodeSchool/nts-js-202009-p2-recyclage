import React from 'react';
import Filter from './Filter';

const typeFilter = [
  {
    filterTitle: 'Filtrer par déchets',
    filter: [
      'Verre',
      'Carton',
      'Plastique',
      'Electroniques',
      'Déchets dangereux',
      'Encombrants',
      'Alimentaires',
    ],
    id: 1,
  },
  {
    filterTitle: 'Filtrer par type de collecte',
    filter: [
      'Compost',
      'Colonnes enterrées',
      'Colonnes aériennes',
      'Déchetterie',
    ],
    id: 2,
  },
  {
    filterTitle: 'Lieux et Rdv Tri-sac',
    filter: ['Tri-sac'],
    id: 3,
  },
];

const FilterList = () => (
  <div>
    {typeFilter.map((typeFilter) => (
      <Filter {...typeFilter} key={typeFilter.id} />
    ))}
  </div>
);

export default FilterList;

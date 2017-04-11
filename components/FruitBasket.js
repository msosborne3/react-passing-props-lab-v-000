import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, selectedFilter, onChangeFilter }) => {
  return (
    <div className="fruit-basket">
      <Filter filters={filters} handleChange={onChangeFilter} />
      <FilteredFruitList
        fruit={fruit}
        filter={selectedFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  selectedFilter: null,
  updateFilterCallback: () => {}
};

export default FruitBasket;

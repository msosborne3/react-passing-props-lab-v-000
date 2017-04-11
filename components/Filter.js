import React from 'react';

const Filter = ({ filters, changeFilter }) => {
  return (
      <select onChange={onChangeFilter} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
  );
}

Filter.defaultProps = {
  filters: [],
  changeFilter: () => {}
};

export default Filter;

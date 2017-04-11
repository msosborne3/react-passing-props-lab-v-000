import React from 'react';

const FilteredFruitList = ({ fruit, selectedFilter }) => {
  const list = !selectedFilter ? fruit :
      fruit.filter(i => i.fruit_type == selectedFilter);

  return (
      <ul className="fruit-list">
        {list.map((i,idx) => <li key={idx}>{i.char}</li>)}
      </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  selectedFilter: null,
};

export default FilteredFruitList;

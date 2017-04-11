import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFiler: null,
      fruit: []
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.changeFilter = this.changeFiler.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  changeFilter(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket 
        fruit={this.state.fruit}
        filters={this.state.filters}
        selectedFilter={this.state.selectedFilter}
        changeFilterCallback={this.changeFilter} />
    );
  }
}

export default App;

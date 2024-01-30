import { Component } from 'react';
import BeerList from './BeerList/BeerList';
import initialBeerItems from './data.json';
import SearchBar from './SearchBar/SearchBar';
import BeerForm from './BeerForm/BeerForm';

class App extends Component {
  state = {
    beerItems: initialBeerItems,
    filters: {
      place: '',
      brewery: '',
      style: '',
    },
  };

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value,
      },
    }));
  };

  filterBeerItems = () => {
    const { beerItems, filters } = this.state;
    return beerItems.filter(beer => {
      return (
        (!filters.place ||
          beer.place.toLowerCase().includes(filters.place.toLowerCase())) &&
        (!filters.brewery ||
          beer.brewery.toLowerCase().includes(filters.brewery.toLowerCase())) &&
        (!filters.style ||
          beer.style.toLowerCase().includes(filters.style.toLowerCase()))
      );
    });
  };

  deleteBeerItem = beerId => {
    this.setState(prevState => ({
      beerItems: prevState.beerItems.filter(beer => beer.id !== beerId),
    }));
  };

  render() {
    const { filters } = this.state;

    return (
      <div>
        <h1>BeerLoversApp</h1>
        <BeerForm />
        <h3>Searchbar</h3>
        <SearchBar filters={filters} onChangeFilter={this.changeFilter} />
        <BeerList
          items={this.filterBeerItems()}
          onDeleteBeerItem={this.deleteBeerItem}
        />
      </div>
    );
  }
}

export default App;

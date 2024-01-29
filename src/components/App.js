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
      date: '',
      brewery: '',
      style: ''
    }
    
  };

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value,
      },
    }));
  };

  render() {
    const { beerItems, filters } =
      this.state;

    return (
      <div>
        <h1>BeerLoversApp</h1>
        <BeerForm />
        <SearchBar
          filters={filters}
          onChangeFilter={this.changeFilter}
        />
        <BeerList items={beerItems} />
      </div>
    );
  }
}

export default App;

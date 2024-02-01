import { Component } from 'react';
import { nanoid } from 'nanoid';
import BeerList from './BeerList/BeerList';
import initialBeerItems from './data.json';
import SearchBar from './SearchBar/SearchBar';
import BeerForm from './BeerForm/BeerForm';
import { Container, ListContainer, MainContainer, SearchContainer } from './Layout';

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
        [key]: value === "All" ? "" : value,
      },
    }));
  };

  filterBeerItems = () => {
    const { beerItems, filters } = this.state;
  
    return beerItems.filter(beer => {
      const placeMatches = !filters.place ||
        beer.place.toLowerCase().includes(filters.place.toLowerCase());
      const breweryMatches = !filters.brewery ||
        beer.brewery.toLowerCase().includes(filters.brewery.toLowerCase());
      const styleMatches = !filters.style ||
        beer.style.toLowerCase() === filters.style.toLowerCase();
  
      return placeMatches && breweryMatches && styleMatches;
    });
  };

  deleteBeerItem = beerId => {
    this.setState(prevState => ({
      beerItems: prevState.beerItems.filter(beer => beer.id !== beerId),
    }));
  };

  addBeer = newBeer => {
    const { beerItems } = this.state;
  
    const beerExists = beerItems.some(
      item => item.beer.toLowerCase() === newBeer.beer.toLowerCase()
    );
  
    if (beerExists) {
      alert(`${newBeer.beer} is already in the list.`);
    } else {
      this.setState(prevState => ({
        beerItems: [...prevState.beerItems, { ...newBeer, id: nanoid() }],
      }));
    }
  };

  render() {
    const { filters } = this.state;

    return (
      <Container>
        <h1>BeerLoversApp</h1>
        <BeerForm onAdd={this.addBeer} />

        <MainContainer>
          <SearchContainer>
            <h3>Searchbar</h3>
            <SearchBar filters={filters} onChangeFilter={this.changeFilter} />
          </SearchContainer>

          <ListContainer>
            <BeerList
              items={this.filterBeerItems()}
              onDeleteBeerItem={this.deleteBeerItem}
            />
          </ListContainer>
        </MainContainer>
      </Container>
    );
  }
}

export default App;

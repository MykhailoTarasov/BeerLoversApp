import { Component } from 'react';
import { nanoid } from 'nanoid';
import BeerList from './BeerList/BeerList';
import SearchBar from './SearchBar/SearchBar';
import BeerForm from './BeerForm/BeerForm';
import {
  Container,
  ListContainer,
  MainContainer,
  SearchContainer,
} from './Layout';

// Lets use React lib in a modern way)) Functional components, hooks instead of class component.
// It is important to understand how it is work but for now class components are no longer in use.
// As a little challenge try to rewrite the app to get rid of class components.
class App extends Component {
  state = {
    beerItems: [],
    filters: {
      place: '',
      brewery: '',
      style: '',
      date: '',
    },
  };

  componentDidMount() {
    const savedBeer = localStorage.getItem('changed-beerItems');
    if (savedBeer !== null) {
      this.setState({
        beerItems: JSON.parse(savedBeer),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.beerItems !== this.state.beerItems) {
      localStorage.setItem(
        'changed-beerItems',
        JSON.stringify(this.state.beerItems)
      );
    }
  }

  changeFilter = (key, value) => {
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [key]: value === 'All' ? '' : value,
      },
    }));
  };

  filterBeerItems = () => {
    const { beerItems, filters } = this.state;

    return beerItems.filter(beer => {
      const placeMatches =
        !filters.place ||
        beer.place.toLowerCase().includes(filters.place.toLowerCase());
        const dateMatches =
        !filters.date ||
        beer.date.toLowerCase().includes(filters.date.toLowerCase());
      const breweryMatches =
        !filters.brewery ||
        beer.brewery.toLowerCase().includes(filters.brewery.toLowerCase());
      const styleMatches =
        !filters.style ||
        beer.style.toLowerCase() === filters.style.toLowerCase();

      return placeMatches && breweryMatches && styleMatches && dateMatches;
    });
  };

  recetFilters = () => {
    this.setState({
      filters: {
        place: '',
        brewery: '',
        style: '',
        date: '',
      },
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
            <SearchBar
              filters={filters}
              onChangeFilter={this.changeFilter}
              onRecet={this.recetFilters}
            />
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
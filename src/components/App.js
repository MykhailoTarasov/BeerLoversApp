import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import BeerList from './BeerList/BeerList';
import SearchBar from './SearchBar/SearchBar';
import BeerForm from './BeerForm/BeerForm';
import {
  Container,
  ListContainer,
  MainContainer,
  SearchContainer,
} from './Layout';
import { createBeer, deleteBeerById, fetchBeers } from 'api';

class App extends Component {
  state = {
    beerItems: [],
    loading: false,
    error: false,
    filters: {
      place: '',
      brewery: '',
      style: '',
      date: '',
    },
  };

  async componentDidMount() {
    const savedBeer = localStorage.getItem('changed-beerItems');
    if (savedBeer !== null) {
      this.setState({
        beerItems: JSON.parse(savedBeer),
      });
    }

    try {
      this.setState({ loading: true, error: false });
      const beers = await fetchBeers();
      toast.success('You have some beer!');
      this.setState({
        beerItems: beers,
        loading: false,
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
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

  deleteBeerItem = async beerId => {
    try {
      this.setState({ loading: true, error: false });
      const deletedBeer = await deleteBeerById(beerId);
      this.setState(prevState => ({
        beerItems: prevState.beerItems.filter(
          beer => beer.id !== deletedBeer.id
        ),
      }));
      toast.success('Beer deleted!');
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };


  addBeer = async newBeer => {
    try {
      const { beerItems } = this.state;

      const beerExists = beerItems.some(
        item => item.beer.toLowerCase() === newBeer.beer.toLowerCase()
      );
  
      if (beerExists) {
        alert(`${newBeer.beer} is already in the list.`);
      } else {
        this.setState({ loading: true, error: false });
        const beer = await createBeer(newBeer)
        this.setState(prevState => ({
          beerItems: [...prevState.beerItems, beer],
        }));
      }
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
    
  };

  render() {
    const { filters, loading, error } = this.state;
    const visibleBeerItems = this.filterBeerItems();

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
            {visibleBeerItems.length > 0 && (
              <BeerList
                items={visibleBeerItems}
                onDeleteBeerItem={this.deleteBeerItem}
              />
            )}
            <Toaster position="top-right" />
          </ListContainer>
        </MainContainer>
        {loading && <p>Loading...</p>}
        {error && <p>Whoops... Error! Please, reload this page!</p>}
      </Container>
    );
  }
}

export default App;

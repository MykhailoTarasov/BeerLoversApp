import { useEffect, useState } from 'react';
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
import axios from 'axios';
import Loader from './Loader/Loader';
import LoadMoreButton from './LoadMoreButton/LoadMoreButton';

const App = () => {
  const [beerItems, setBeerItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    place: '',
    brewery: '',
    style: '',
    date: '',
  },);

  useEffect(() => {
    localStorage.setItem(
      'changed-beerItems',
      JSON.stringify(beerItems)
    );
  }, [beerItems])

  useEffect(() => {
    async function getBeers() {
      try {
        setLoading(true);
        setError(false);
        const beers = await fetchBeers();
        toast.success('You have some beer!');
        setBeerItems(beers);
        setLoading(false);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getBeers();
  }, []);

  const addBeer = async newBeer => {
    try {
      const beerExists = beerItems.some(
        item => item.beer.toLowerCase() === newBeer.beer.toLowerCase()
      );
  
      if (beerExists) {
        alert(`${newBeer.beer} is already in the list.`);
      } else {
        setLoading(true);
        setError(false);
        const beer = await createBeer(newBeer)
        setBeerItems(prevState => [...prevState, beer])
        toast.success('Beer added!');
      }
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
    
  };

  const deleteBeerItem = async beerId => {
    try {
      setLoading(true);
      setError(false);
      const deletedBeer = await deleteBeerById(beerId);
      setBeerItems(prevState => prevState.filter(
        beer => beer.id !== deletedBeer.id
      ))
      toast.success('Beer deleted!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const changeFilter = (key, value) => {
    setFilters(prevState => ({
      ...prevState,
      [key]: value === 'All' ? '' : value,
    }));
  };

  const recetFilters = () => {
    setFilters({
      place: '',
      brewery: '',
      style: '',
      date: '',
    },);
  };

  const updateBeerItem = async updatedBeer => {
    try {
      setLoading(true);
      setError(false);
      const response = await axios.put(`/Beers/${updatedBeer.id}`, updatedBeer);
      const updatedBeerItem = response.data;

      setBeerItems(prevState => prevState.map(beer => 
        beer.id === updatedBeerItem.id ? updatedBeerItem : beer
      ))
      
      toast.success('Beer updated!');
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const visibleBeerItems = beerItems.filter(beer => {

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

  return (
    <Container>
      <h1>BeerLoversApp</h1>
      {error && <p>Whoops... Error! Please, reload this page!</p>}
      <BeerForm onAdd={addBeer} />

      <MainContainer>
        <SearchContainer>
          <h3>Searchbar</h3>
          <SearchBar
            filters={filters}
            onChangeFilter={changeFilter}
            onRecet={recetFilters}
          />
          {loading && <Loader/>}
        </SearchContainer>

        <ListContainer>
          {visibleBeerItems.length > 0 && (
            <BeerList
              items={visibleBeerItems}
              onDeleteBeerItem={deleteBeerItem}
              onUpdateBeerItem={updateBeerItem}
            />
          )}
          <LoadMoreButton />
          <Toaster position="top-right" />
        </ListContainer>
      </MainContainer>
      
      
    </Container>
  );
}


export default App;

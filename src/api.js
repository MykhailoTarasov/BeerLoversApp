import axios from 'axios';

axios.defaults.baseURL = 'https://65d1e18a987977636bfb9c1f.mockapi.io/';

export const fetchBeers = async () => {
    const response = await axios.get('/Beers');
    return response.data;
  };
  
  export const createBeer = async beer => {
    const response = await axios.post('/Beers', beer);
    return response.data;
  };
  
  export const deleteBeerById = async beerId => {
    const response = await axios.delete(`/Beers/${beerId}`);
    return response.data;
  };
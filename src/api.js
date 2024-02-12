import axios from 'axios';

axios.defaults.baseURL = 'https://65c9e9353b05d29307df3e1d.mockapi.io/api/';

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
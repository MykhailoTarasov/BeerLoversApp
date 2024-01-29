import { Component } from 'react';
import BeerList from './BeerList/BeerList';
import initialBeerItems from './data.json';

class App extends Component {
  state = {
    beerItems: initialBeerItems,
    breweryFilter: "",
    styleFilter: ""
  }

  render() {
    return (
      <div>
        <h1>BeerLoversApp</h1>
        <BeerList />
      </div>
    );
  }
}

export default App;

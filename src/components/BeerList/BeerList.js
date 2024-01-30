import BeerCard from "components/BeerCard/BeerCard";

const BeerList = ({ items, onDeleteBeerItem }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
            <BeerCard beerItem={item} onDeleteBeerItem={onDeleteBeerItem}/>
        </li>
      ))}
    </ul>
  );
};

export default BeerList;

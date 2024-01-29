import BeerCard from "components/BeerCard/BeerCard";

const BeerList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
            <BeerCard beerItem={item}/>
        </li>
      ))}
    </ul>
  );
};

export default BeerList;

import BeerCard from "components/BeerCard/BeerCard";
import { List, ListItem } from "./BeerList.Styled";

const BeerList = ({ items, onDeleteBeerItem }) => {
  return (
    <List>
      {items.map(item => (
        <ListItem key={item.id}>
            <BeerCard beerItem={item} onDeleteBeerItem={onDeleteBeerItem}/>
        </ListItem>
      ))}
    </List>
  );
};

export default BeerList;

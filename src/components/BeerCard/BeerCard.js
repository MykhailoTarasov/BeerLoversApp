import { CardBox, CardText, CardTitle, DeleteButton } from './BeerCard.Styled';

const BeerCard = ({
  beerItem: { id, beer, place, date, brewery, style },
  onDeleteBeerItem,
}) => {
  return (
    <CardBox>
      <CardTitle>{beer}</CardTitle>
      <DeleteButton onClick={() => onDeleteBeerItem(id)}>Delete</DeleteButton>
      <div>
        <CardText>Place: {place}</CardText>
        <CardText>Date: {date}</CardText>
        <CardText>Brewery: {brewery}</CardText>
        <CardText>Style: {style}</CardText>
      </div>
    </CardBox>
  );
};

export default BeerCard;

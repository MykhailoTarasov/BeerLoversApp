import { CardBox, CardText, CardTitle, DeleteButton, DeleteIcon } from './BeerCard.Styled';

const BeerCard = ({
  beerItem: { id, beer, place, date, brewery, style },
  onDeleteBeerItem,
}) => {
  return (
    <CardBox beerstyle={style}>
      <CardTitle>{beer}</CardTitle>
      <DeleteButton onClick={() => onDeleteBeerItem(id)}><DeleteIcon/></DeleteButton>
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

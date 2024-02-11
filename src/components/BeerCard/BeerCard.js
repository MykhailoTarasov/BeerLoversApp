import React from 'react';
import {
  CardBox,
  CardText,
  CardTitle,
  DeleteButton,
  DeleteIcon,
  UpdateButton,
  UpdateIcon,
} from './BeerCard.Styled';

const BeerCard = ({
  beerItem: { id, beer, place, date, brewery, style },
  onDeleteBeerItem,
}) => {
  return (
    <CardBox $beerstyle={style}>
      <CardTitle>{beer}</CardTitle>

        <UpdateButton>
          <UpdateIcon />
        </UpdateButton>
        <DeleteButton onClick={() => onDeleteBeerItem(id)}>
          <DeleteIcon />
        </DeleteButton>

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

import { CardBox } from "./BeerCard.Styled";

const BeerCard = ({ beerItem: {id, beer, place, date, brewery, style}, onDeleteBeerItem }) => {
    return <CardBox>
        <h2>{beer}</h2>
        <button onClick={() => onDeleteBeerItem(id)}>Delete</button>
        <div>
        <p>Place: {place}</p>
        <p>Date: {date}</p>
        <p>Brewery: {brewery}</p>
        <p>Style: {style}</p>
        </div>
        
    </CardBox>
}

export default BeerCard;
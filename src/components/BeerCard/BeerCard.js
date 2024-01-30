const BeerCard = ({ beerItem: {id, beer, place, date, brewery, style}, onDeleteBeerItem }) => {
    return <div>
        <h2>{beer}</h2>
        <button onClick={() => onDeleteBeerItem(id)}>Delete</button>
        <div>
        <p>Place: {place}</p>
        <p>Date: {date}</p>
        <p>Brewery: {brewery}</p>
        <p>Style: {style}</p>
        </div>
        
    </div>
}

export default BeerCard;
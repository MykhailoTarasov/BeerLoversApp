const BeerCard = ({ beerItem: {beer, place, date, brewery, style} }) => {
    return <div>
        <h2>{beer}</h2>
        <div>
        <p>Place: {place}</p>
        <p>Date: {date}</p>
        <p>Brewery: {brewery}</p>
        <p>Style: {style}</p>
        </div>
        
    </div>
}

export default BeerCard;
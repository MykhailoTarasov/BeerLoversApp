import { beerStyles } from 'constants';
import { Button, Container, StyledField, StyledSelect } from './SearchBar.Styled';

const SearchBar = ({ filters: { place, brewery, style, date }, onChangeFilter, onRecet }) => {
  return (
    <Container>
      <StyledField
        type="text"
        value={place}
        onChange={evt => onChangeFilter('place', evt.target.value)}
        placeholder="Filter by place..."
      />
      <StyledField
        type="text"
        value={date}
        onChange={evt => onChangeFilter('date', evt.target.value)}
        placeholder="Filter by date..."
      />
      <StyledField
        type="text"
        value={brewery}
        onChange={evt => onChangeFilter('brewery', evt.target.value)}
        placeholder="Filter by brewery..."
      />
      <StyledSelect
        value={style}
        onChange={evt => {
          onChangeFilter('style', evt.target.value);
        }}
      >
       {beerStyles.map((style) => <option key={style} value={style}>{style}</option>)}
      </StyledSelect>
      <Button type="button" onClick={onRecet}>Recet filters</Button>
    </Container>
  );
};

export default SearchBar;

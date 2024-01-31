import { Container } from "./SearchBar.Styled";

const SearchBar = ({
  filters: { place, brewery, style },
  onChangeFilter
}) => {
  return (
    <Container>
      <input
        type="text"
        value={place}
        onChange={evt => onChangeFilter('place', evt.target.value)}
        placeholder="Filter by place..."
      />
      <input
        type="text"
        value={brewery}
        onChange={evt => onChangeFilter('brewery', evt.target.value)}
        placeholder="Filter by brewery..."
      />
      <input
        type="text"
        value={style}
        onChange={evt => onChangeFilter('style', evt.target.value)}
        placeholder="Filter by style..."
      />
    </Container>
  );
};

export default SearchBar;

import { Container, StyledField } from "./SearchBar.Styled";

const SearchBar = ({
  filters: { place, brewery, style },
  onChangeFilter
}) => {
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
        value={brewery}
        onChange={evt => onChangeFilter('brewery', evt.target.value)}
        placeholder="Filter by brewery..."
      />
      <StyledField
        type="text"
        value={style}
        onChange={evt => onChangeFilter('style', evt.target.value)}
        placeholder="Filter by style..."
      />
    </Container>
  );
};

export default SearchBar;

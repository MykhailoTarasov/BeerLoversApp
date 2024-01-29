const SearchBar = ({
  filters: { place, date, brewery, style },
  onChangeFilter
}) => {
  return (
    <div>
      <input
        type="text"
        value={place}
        onChange={evt => onChangeFilter('place', evt.target.value)}
        placeholder="Filter by place..."
      />
      <input
        type="text"
        value={date}
        onChange={evt => onChangeFilter('date', evt.target.value)}
        placeholder="Filter by date..."
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
    </div>
  );
};

export default SearchBar;

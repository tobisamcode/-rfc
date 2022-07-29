const SearchItem = ({ search, setSearch }) => {
  return (
    <form action="" className="searchForm" onSubmit={e => e.preventDefault()}>
      <label htmlFor="search">search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="Search Items"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItem;

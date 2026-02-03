function SearchField({ searchTerm, setSearchTerm }) {
  const clearSearch = () => {
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  };

  return (
    <div className="searchfield">
      <input
        type="text"
        placeholder="Search by genre (e.g. strategy)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <button onClick={clearSearch}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchField;
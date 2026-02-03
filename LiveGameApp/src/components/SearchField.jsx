function SearchField({ searchTerm, setSearchTerm }) {
  const clearSearch = () => {
    setSearchTerm("");
    localStorage.removeItem("searchTerm");
  };

  return (
    <div className="searchfield">
      <input
        type="text"
        style={{ width: '400px', padding: '0.5rem', fontSize: '0.8rem' }}
        placeholder="Search by genre (e.g. strategy)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {searchTerm && (
        <button style={{
          padding: '0.5rem 1.2rem',
          fontSize: '0.8rem',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)'}}
          onClick={clearSearch}>
          Clear search
        </button>
      )}
    </div>
  );
}

export default SearchField;
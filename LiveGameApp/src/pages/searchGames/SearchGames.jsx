import './SearchGames.css';
import { useEffect, useState } from "react";
import { fetchGameList } from "../../services/gamesService.js";
import ContentBox from '../../layout/contentBox/ContentBox.jsx';
import SearchField from '../../components/SearchField.jsx';

function SearchGames(){
    const [SearchGame, setSearchGame] = useState([]);
    const [searchTerm, setSearchTerm] = useState(() => {
    return localStorage.getItem("searchTerm") || "";});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    fetchGameList()
      .then((data) => {
        setSearchGame(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
      
  }, []);    
    useEffect(() => {localStorage.setItem("searchTerm", searchTerm);}, [searchTerm]);
    const filteredGames = SearchGame.filter((game) =>
      game.genre
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

    return (
    <ContentBox title="Search Games">
      <SearchField
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {loading && <p>Loading game search...</p>}
      {error && <p>Error while fetching API: {error}</p>}

      <div className="searchgamedisplay">
        {filteredGames.map((game) => (
          <div key={game.id} className="searchgameitem">
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <p className="searchtitle">{game.title}</p>
            </a>
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="searchthumb"
              />
            </a>
            <p><b>{game.genre}</b></p>
          </div>
        ))}
      </div>
    </ContentBox>
  );
}

export default SearchGames;
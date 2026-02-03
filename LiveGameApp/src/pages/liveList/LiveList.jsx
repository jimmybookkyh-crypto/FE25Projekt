import './LiveList.css';
import { useEffect, useState } from "react";
import { fetchGameList } from "../../services/gamesService.js";
import ContentBox from '../../layout/contentBox/ContentBox.jsx';

function LiveList(){
    const [LiveList, setLiveList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    fetchGameList()
      .then((data) => {
        const sorted = data.sort((a, b) => {
          return new Date(b.release_date) - new Date(a.release_date);
        });
        setLiveList(sorted);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);
    return (
    <ContentBox title="Latest Released">
      {loading && <p>Loading live games...</p>}
      {error && <p>Error while fetching API: {error}</p>}

      <div className="livelistgrid">
        {LiveList.slice(0, 30).map((game) => (
          <div key={game.id} className="liveitem">
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <p className="livetitle">{game.title}</p>
            </a>
            <a href={game.game_url} target="_blank" rel="noopener noreferrer">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="livethumb"
              />
            </a>
            <p>{game.developer}<br/>{game.release_date}<br/><b>{game.genre}</b></p>
            
          </div>
        ))}
      </div>
    </ContentBox>
  );
}

export default LiveList;
import './News.css';
import { useEffect, useState } from "react";
import { fetchNews } from "../../services/newsService.js";
import ContentBox from '../../layout/contentBox/ContentBox.jsx';
import TextBreak from '../textbreak.jsx';
import Pagination from '../Pagination.jsx';

function News(){
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    fetchNews()
      .then((data) => {
        setNews(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });

  }, []);
  const itemsPerPage = 3;
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = news.slice(startIndex, endIndex);
    return (      
    <ContentBox title="Live Games News">
      {loading && <p>Loading News...</p>}
      {error && <p>Error while fetching API: {error}</p>}

      {currentNews.map((item) => (
      <div key={item.id} className="newsitem">
        <a href={item.article_url} target="_blank" rel="noopener noreferrer">
          <TextBreak text={item.title} chunkSize={45} className="newstitle" />
        </a>
        <a href={item.article_url} target="_blank" rel="noopener noreferrer">
          <img src={item.thumbnail} alt={item.title} className="newsthumb" />
        </a>
        <p>{item.short_description}</p>
      </div>
      ))}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </ContentBox>
  );
}

export default News;
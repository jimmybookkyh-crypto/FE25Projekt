import './App.css'
import { Routes, Route, } from "react-router-dom";
import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import News from './components/news/News.jsx';
import LiveList from './pages/liveList/LiveList.jsx';
import SearchGames from './pages/searchGames/SearchGames.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.Jsx';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />}>
            <Route index element={<News />} />
          </Route> 
          <Route path="live" element= {<LiveList />}  />
          <Route path="search" element= {<SearchGames />}  />
          <Route path="about" element= {<About />}  />
        </Route>  
        <Route path="*" element= {<NotFound />}  />
      </Routes>
    </>
  );
}

export default App
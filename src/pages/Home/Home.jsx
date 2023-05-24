import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getDayTrendingMovies } from '../../services/themoviedb-api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);

  useEffect(() => {
    getDayTrendingMovies().then(data => setTrandingMovies(data));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trandingMovies && (
        <ul>
          {trandingMovies.map(item => (
            <li key={item.id}>
              <Link to={`movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Home;

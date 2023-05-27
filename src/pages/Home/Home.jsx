// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Services
import { getDayTrendingMovies } from '../../services/themoviedb-api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getDayTrendingMovies().then(data => setTrandingMovies(data));
  }, []);

  return (
    trandingMovies && (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trandingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  );
};

export default Home;

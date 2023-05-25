// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// Services
import { getDayTrendingMovies } from '../../services/themoviedb-api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);

  useEffect(() => {
    getDayTrendingMovies().then(data => setTrandingMovies(data));
  }, []);

  const currentLocation = useLocation();

  return (
    trandingMovies && (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trandingMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={currentLocation}>
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

// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
// Services
import { getDayTrendingMovies } from '../../services/themoviedb-api';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    getDayTrendingMovies()
      .then(data => setTrandingMovies(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <BeatLoader color="#36d7b7" />}

      {trandingMovies && (
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
      )}
    </>
  );
};

export default Home;

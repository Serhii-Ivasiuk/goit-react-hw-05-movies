// Libs
import { useEffect, useState } from 'react';
// Services
import { getDayTrendingMovies } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDayTrendingMovies()
      .then(data => setMovies(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {movies && (
        <>
          <h1>Trending today</h1>

          <MoviesList data={movies} />
        </>
      )}
    </>
  );
};

export default Home;

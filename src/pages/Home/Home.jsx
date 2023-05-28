// Libs
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
// Services
import { getDayTrendingMovies } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
// Styled components
import { Heading } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDayTrendingMovies()
      .then(data => setMovies(data))
      .catch(() => toast.error('Something went wrong, please try again later.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {movies && (
        <>
          <Heading>Trending today</Heading>

          <MoviesList data={movies} />
        </>
      )}
    </>
  );
};

export default Home;

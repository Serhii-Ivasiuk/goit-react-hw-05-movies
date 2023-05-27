// Libs
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// Services
import { getMoviesByTitle } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
      setMovies(null);
      return;
    }

    setIsLoading(true);

    getMoviesByTitle(query)
      .then(data => setMovies(data))
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const queryValue = evt.target.elements.searchInput.value
      .trim()
      .toLowerCase();

    if (queryValue === '') {
      alert('Please enter your search query');
      return;
    }

    setSearchParams({ query: queryValue });

    evt.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="searchInput" />
        </label>
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}

      {movies && <MoviesList data={movies} />}

      {movies?.length === 0 && (
        <p>
          There is no movies matching your request: "{searchParams.get('query')}
          "
        </p>
      )}
    </>
  );
};

export default Movies;

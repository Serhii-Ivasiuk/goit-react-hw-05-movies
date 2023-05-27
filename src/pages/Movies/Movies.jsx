// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
// Services
import { getMoviesByTitle } from '../../services/themoviedb-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

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

      {isLoading && <BeatLoader color="#36d7b7" />}

      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {movies?.length === 0 && (
        <div>
          There is no movies matching your request: "{searchParams.get('query')}
          "
        </div>
      )}
    </>
  );
};

export default Movies;

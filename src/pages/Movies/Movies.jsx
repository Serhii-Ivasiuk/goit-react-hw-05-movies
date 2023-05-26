// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// Services
import { getMoviesByTitle } from '../../services/themoviedb-api';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';

    if (!query) {
      setMovies(null);
      return;
    }

    getMoviesByTitle(query).then(data => setMovies(data));
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="searchInput" />
        </label>
        <button type="submit">Search</button>
      </form>

      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={location}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;

// Libs
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
// Services
import { getMoviesByTitle } from '../../services/themoviedb-api';

const Movies = () => {
  const [moviesByTitle, setMoviesByTitle] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const movieTitle = searchParams.get('query') ?? '';

    if (!movieTitle) return;

    getMoviesByTitle(movieTitle).then(data => setMoviesByTitle(data));
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

  const currentLocation = useLocation();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="searchInput" />
        </label>
        <button type="submit">Search</button>
      </form>

      {moviesByTitle && (
        <ul>
          {moviesByTitle.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={currentLocation}>
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

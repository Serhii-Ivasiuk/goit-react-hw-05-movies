import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getMoviesByTitle } from '../../services/themoviedb-api';

const Movies = () => {
  const [moviesByTitle, setMoviesByTitle] = useState(null);
  const [searchQuery, setSearchQuery] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();

    const query = new FormData(evt.target).get('value').toLowerCase();

    if (query === '') {
      setSearchQuery({});
      return;
    }

    setSearchQuery({ query });

    evt.target.reset();
  };

  useEffect(() => {
    const movieTitle = searchQuery.get('query') ?? '';

    if (!movieTitle) return;

    getMoviesByTitle(movieTitle).then(data => setMoviesByTitle(data));
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="value" />
        </label>
        <button type="submit">Search</button>
      </form>

      {moviesByTitle && (
        <ul>
          {moviesByTitle.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;

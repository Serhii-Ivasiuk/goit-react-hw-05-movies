// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Servises
import { getMovieCreditsById } from '../../services/themoviedb-api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    getMovieCreditsById(movieId).then(data => setMovieCredits(data));
  }, [movieId]);

  const handleImageError = evt => {
    evt.target.src = 'https://via.placeholder.com/100x150';
  };

  return (
    movieCredits && (
      <ul>
        {movieCredits.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
              alt={`${name}`}
              width="100"
              height="150"
              onError={handleImageError}
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;

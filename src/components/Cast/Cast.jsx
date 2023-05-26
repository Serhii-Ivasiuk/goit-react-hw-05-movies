// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Servises
import { getMovieCreditsById } from '../../services/themoviedb-api';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCreditsById(movieId).then(data => setMovieCredits(data));
  }, [movieId]);

  return (
    <>
      {movieCredits && (
        <ul>
          {movieCredits.map(({ id, name, profile_path, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : 'https://via.placeholder.com/100x150'
                }
                alt={`${name}`}
                width="100"
                height="150"
              />
              <p>{name}</p>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}

      {movieCredits?.length === 0 && (
        <p>
          Unfortunately, we don't have information about the cast of this film.
        </p>
      )}
    </>
  );
};

export default Cast;

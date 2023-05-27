// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
// Servises
import { getMovieCreditsById } from '../../services/themoviedb-api';

const Cast = () => {
  const [movieCredits, setMovieCredits] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieCreditsById(movieId)
      .then(data => setMovieCredits(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <BeatLoader color="#36d7b7" />}

      {movieCredits?.length === 0 && !isLoading && (
        <p>
          Unfortunately, we don't have information about the cast of this movie.
        </p>
      )}

      {movieCredits && !isLoading && (
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
    </>
  );
};

export default Cast;

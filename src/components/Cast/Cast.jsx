import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCreditsById } from '../../services/themoviedb-api';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState(null);

  const handleImageError = evt => {
    evt.target.src = 'https://via.placeholder.com/100x150';
  };

  useEffect(() => {
    getMovieCreditsById(movieId).then(data => setMovieCredits(data));
  }, [movieId]);

  return (
    <>
      {movieCredits && (
        <ul>
          {movieCredits.map(item => (
            <li key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={`${item.name}`}
                width="100"
                height="150"
                onError={handleImageError}
              />
              <p>{item.name}</p>
              <p>{item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;

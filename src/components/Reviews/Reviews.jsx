// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Services
import { getMovieReviewsById } from '../../services/themoviedb-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    getMovieReviewsById(movieId).then(data => setMovieReviews(data));
  }, [movieId]);

  return (
    <>
      {movieReviews && (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {movieReviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
          {movieReviews.map(item => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}

      {movieReviews && movieReviews.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;

// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
// Services
import { getMovieReviewsById } from '../../services/themoviedb-api';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieReviewsById(movieId)
      .then(data => setMovieReviews(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <BeatLoader color="#36d7b7" />}

      {movieReviews?.length === 0 && !isLoading && (
        <p>We don't have any reviews for this movie yet.</p>
      )}

      {movieReviews && !isLoading && (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;

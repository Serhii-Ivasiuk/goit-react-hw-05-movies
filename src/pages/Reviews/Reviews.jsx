// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Services
import { getMovieReviewsById } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
import RewiewList from 'components/ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieReviewsById(movieId)
      .then(data => setReviews(data))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {reviews?.length === 0 && (
        <p>We don't have any reviews for this movie yet.</p>
      )}

      {reviews && <RewiewList data={reviews} />}
    </>
  );
};

export default Reviews;

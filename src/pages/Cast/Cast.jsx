// Libs
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// Servises
import { getMovieCastById } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getMovieCastById(movieId)
      .then(data => setCast(data))
      .catch(error =>
        toast.error('Something went wrong, please try again later.')
      )
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}

      {cast?.length === 0 && (
        <p>
          Unfortunately, we don't have information about the cast of this movie.
        </p>
      )}

      {cast && <CastList data={cast} />}
    </>
  );
};

export default Cast;

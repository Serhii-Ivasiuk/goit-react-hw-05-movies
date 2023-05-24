import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieDetailsById } from '../../services/themoviedb-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const handleImageError = evt => {
    evt.target.src = 'https://via.placeholder.com/200x300';
  };

  useEffect(() => {
    getMovieDetailsById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  return (
    <div>
      <button type="button">⬅ go back</button>
      {movieDetails && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={`${movieDetails.title} movie poster`}
            width="200"
            height="300"
            onError={handleImageError}
          />
          <h1>
            {movieDetails.title} ({movieDetails.release_date.substr(0, 4)})
          </h1>
          <p>User Score: {movieDetails.vote_average * 10}%------------</p>
          <p>Overview</p>
          <p>{movieDetails.overview}</p>
          <p>Genres</p>
          <p>-----------</p>
        </div>
      )}
      <hr />

      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <hr />

      <Outlet />
    </div>
  );
};

export default MovieDetails;

// Libs
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// Srvices
import { getMovieDetailsById } from '../../services/themoviedb-api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocation = location.state ?? '/';

  useEffect(() => {
    getMovieDetailsById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  const handleImageError = evt => {
    evt.target.src = 'https://via.placeholder.com/200x300';
  };

  return (
    movieDetails && (
      <div>
        <Link to={backLinkLocation}>⬅ go back</Link>
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
        <hr />

        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={backLinkLocation}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={backLinkLocation}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />

        <Suspense fallback={<div>Loading additional information...</div>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};

export default MovieDetails;

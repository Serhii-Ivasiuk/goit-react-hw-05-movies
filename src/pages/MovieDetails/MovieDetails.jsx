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
  let genres = '';
  let userScore = '';
  let year = '';
  let posterPath = '';

  useEffect(() => {
    getMovieDetailsById(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (movieDetails) {
    genres = movieDetails.genres.length
      ? movieDetails.genres.map(item => item.name).join(', ')
      : "Unfortunately, we don't have information about the genres of this movie.";

    userScore = `${(movieDetails.vote_average * 10).toFixed(0)}%`;

    year = movieDetails.release_date.substr(0, 4);

    posterPath = movieDetails.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
      : 'https://via.placeholder.com/200x300';
  }

  return (
    movieDetails && (
      <div>
        <Link to={backLinkLocation}>⬅ go back</Link>
        <div>
          <img
            src={posterPath}
            alt={movieDetails.title}
            width="200"
            height="300"
          />
          <h1>
            {movieDetails.title} ({year})
          </h1>
          <p>User Score: {userScore}</p>
          <p>Overview</p>
          <p>{movieDetails.overview}</p>
          <p>Genres</p>
          <p>{genres}</p>
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

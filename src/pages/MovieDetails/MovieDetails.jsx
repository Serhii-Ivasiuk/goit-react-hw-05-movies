// Libs
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// Services
import { getMovieDetailsById } from '../../services/themoviedb-api';
// Components
import Loader from 'components/Loader/Loader';
// Styled components
import {
  Page,
  MovieCard,
  MoviePoster,
  MovieInfo,
  InfoTitle,
  SubpagesLinkList,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocation = location.state?.from ?? '/';
  let genres = '';
  let userScore = '';
  let year = '';
  let posterPath = '';

  useEffect(() => {
    setIsLoading(true);

    getMovieDetailsById(movieId)
      .then(data => setMovieDetails(data))
      .catch(error =>
        toast.error('Something went wrong, please try again later.')
      )
      .finally(() => setIsLoading(false));
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
    <Page>
      {isLoading && <Loader />}

      {movieDetails && (
        <>
          <StyledNavLink to={backLinkLocation}>⬅ go back</StyledNavLink>
          <MovieCard>
            <MoviePoster
              src={posterPath}
              alt={movieDetails.title}
              width="200"
              height="300"
            />
            <MovieInfo>
              <h1>
                {movieDetails.title} ({year})
              </h1>
              <p>User Score: {userScore}</p>
              <InfoTitle>Overview</InfoTitle>
              <p>{movieDetails.overview}</p>
              <InfoTitle>Genres</InfoTitle>
              <p>{genres}</p>
            </MovieInfo>
          </MovieCard>

          <InfoTitle>Additional information</InfoTitle>
          <SubpagesLinkList>
            <li>
              <StyledNavLink to="cast" state={{ from: backLinkLocation }}>
                Cast
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="reviews" state={{ from: backLinkLocation }}>
                Reviews
              </StyledNavLink>
            </li>
          </SubpagesLinkList>
        </>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Page>
  );
};

export default MovieDetails;

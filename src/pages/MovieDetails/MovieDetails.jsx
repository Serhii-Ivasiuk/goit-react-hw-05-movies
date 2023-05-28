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

  useEffect(() => {
    setIsLoading(true);

    getMovieDetailsById(movieId)
      .then(data => setMovieDetails(data))
      .catch(() => toast.error('Something went wrong, please try again later.'))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <Page>
      {isLoading && <Loader />}

      {movieDetails && (
        <>
          <StyledNavLink to={backLinkLocation}>⬅ go back</StyledNavLink>
          <MovieCard>
            <MoviePoster
              src={movieDetails.posterPath}
              alt={movieDetails.title}
              width="200"
              height="300"
            />
            <MovieInfo>
              <h1>
                {movieDetails.title} ({movieDetails.year})
              </h1>
              <p>User Score: {movieDetails.userScore}</p>
              <InfoTitle>Overview</InfoTitle>
              <p>{movieDetails.overview}</p>
              <InfoTitle>Genres</InfoTitle>
              <p>{movieDetails.genres}</p>
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

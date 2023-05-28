// Libs
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
// Services
import { getMoviesByTitle } from '../../services/themoviedb-api';
// Components
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
// Styled components
import { Page } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchValue) {
      setMovies(null);
      return;
    }

    setIsLoading(true);

    getMoviesByTitle(searchValue)
      .then(data => setMovies(data))
      .catch(() => toast.error('Something went wrong, please try again later.'))
      .finally(() => setIsLoading(false));
  }, [searchValue]);

  const handleSubmit = evt => {
    evt.preventDefault();

    const inputValue = evt.target.elements.searchInput.value
      .trim()
      .toLowerCase();

    if (inputValue === '') {
      toast.info('Please, enter yor search request.');
      return;
    }

    setSearchParams({ query: inputValue });
  };

  return (
    <Page>
      <SearchForm onSubmit={handleSubmit} />

      {isLoading && <Loader />}

      {movies && <MoviesList data={movies} />}

      {movies?.length === 0 && (
        <p>There is no movies matching your request: "{searchValue}"</p>
      )}
    </Page>
  );
};

export default Movies;

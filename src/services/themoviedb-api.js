// Libs
import axios from 'axios';
// Helpers
import { transformMovieDetailsData } from '../helpers/transformMovieDetailsData';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const searchParams = new URLSearchParams({
  method: 'GET',
  api_key: 'bdb5e5a669f604b5ce5232529fdedd0b',
  language: 'en-US',
  include_adult: false,
  headers: {
    accept: 'application/json',
  },
});

export const getDayTrendingMovies = async () => {
  const path = '/trending/movie/day';

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.results;
};

export const getMoviesByTitle = async query => {
  const path = '/search/movie';

  const response = await axios.get(`${path}?${searchParams}&query=${query}`);

  return response.data.results;
};

export const getMovieDetailsById = async movieId => {
  const path = `/movie/${movieId}`;

  const response = await axios.get(`${path}?${searchParams}`);

  return transformMovieDetailsData(response.data);
};

export const getMovieCastById = async movieId => {
  const path = `/movie/${movieId}/credits`;

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.cast;
};

export const getMovieReviewsById = async movieId => {
  const path = `/movie/${movieId}/reviews`;

  const response = await axios.get(`${path}?${searchParams}`);

  return response.data.results;
};

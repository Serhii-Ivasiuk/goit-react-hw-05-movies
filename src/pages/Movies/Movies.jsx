import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <p>Movies</p>
      <Link to=":movieId">MovieDetails</Link>
    </div>
  );
};

export default Movies;

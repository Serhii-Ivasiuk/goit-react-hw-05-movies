import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  return (
    <div>
      <p>MovieDetails</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

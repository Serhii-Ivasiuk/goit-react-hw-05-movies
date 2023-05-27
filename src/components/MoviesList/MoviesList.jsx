// Libs
import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

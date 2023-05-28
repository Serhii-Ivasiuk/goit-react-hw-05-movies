// Libs
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styled components
import { List, StyledLink } from './MoviesList.styled';

const MoviesList = ({ data }) => {
  const location = useLocation();

  return (
    <List>
      {data.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MoviesList;

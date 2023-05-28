// Libs
import PropTypes from 'prop-types';

const CastItem = ({ data: { profile_path, name, character } }) => {
  return (
    <li>
      <img
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : 'https://via.placeholder.com/100x150'
        }
        alt={`${name}`}
        width="100"
        height="150"
      />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};

CastItem.propTypes = {
  data: PropTypes.shape({
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  }).isRequired,
};

export default CastItem;

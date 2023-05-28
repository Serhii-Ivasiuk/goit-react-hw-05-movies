// Libs
import PropTypes from 'prop-types';

const RewiewItem = ({ data: { author, content } }) => {
  return (
    <li>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  );
};

RewiewItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default RewiewItem;

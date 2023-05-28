// Libs
import PropTypes from 'prop-types';
// Styled components
import { StyledReviewItem, Author, Name } from './ReviewItem.styled';

const RewiewItem = ({ data: { author, content } }) => {
  return (
    <StyledReviewItem>
      <Author>
        Author: <Name>{author}</Name>
      </Author>
      <p>{content}</p>
    </StyledReviewItem>
  );
};

RewiewItem.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default RewiewItem;

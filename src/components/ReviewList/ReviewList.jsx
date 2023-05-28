// Libs
import RewiewItem from 'components/ReviewItem/ReviewItem';
import PropTypes from 'prop-types';
// Styled components
import { StyledReviewList } from './ReviewList.styled';

const RewiewList = ({ data }) => {
  return (
    <StyledReviewList>
      {data.map(item => (
        <RewiewItem key={item.id} data={item} />
      ))}
    </StyledReviewList>
  );
};

RewiewList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default RewiewList;

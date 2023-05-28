// Libs
import RewiewItem from 'components/ReviewItem/ReviewItem';
import PropTypes from 'prop-types';

const RewiewList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <RewiewItem key={item.id} data={item} />
      ))}
    </ul>
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

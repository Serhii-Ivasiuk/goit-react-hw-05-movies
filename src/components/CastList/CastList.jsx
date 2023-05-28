// Libs
import CastItem from 'components/CastItem/CastItem';
import PropTypes from 'prop-types';

const CastList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <CastItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

CastList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default CastList;

// Libs
import CastItem from 'components/CastItem/CastItem';
import PropTypes from 'prop-types';
// Styled components
import { StyledCastList } from './CastList.styled';

const CastList = ({ data }) => {
  return (
    <StyledCastList>
      {data.map(item => (
        <CastItem key={item.id} data={item} />
      ))}
    </StyledCastList>
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

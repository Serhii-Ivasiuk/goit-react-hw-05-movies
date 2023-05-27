// Libs
import CastItem from 'components/CastItem/CastItem';

const CastList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <CastItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default CastList;

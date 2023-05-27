// Libs
import RewiewItem from 'components/ReviewItem/ReviewItem';

const RewiewList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <RewiewItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default RewiewList;

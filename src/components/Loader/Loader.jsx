// Libs
import { BeatLoader } from 'react-spinners';
// Styled components
import { LoaderWrapper } from './Lader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <BeatLoader color="#36d7b7" />
    </LoaderWrapper>
  );
};

export default Loader;

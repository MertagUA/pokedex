import { ColorRing } from 'react-loader-spinner';

export const Spinner = ({ top, right }) => {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{ position: 'absolute', top, right }}
      wrapperClass="blocks-wrapper"
      colors={['#000000']}
    />
  );
};

import { ColorRing } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <ColorRing
      visible={true}
      height="40"
      width="40"
      ariaLabel="blocks-loading"
      wrapperStyle={{ position: 'absolute', top: '10px', right: '42%' }}
      wrapperClass="blocks-wrapper"
      colors={['#000000']}
    />
  );
};

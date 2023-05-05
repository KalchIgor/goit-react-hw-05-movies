import { Vortex } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';
export const Loader = () => {
  return (
      <Spinner>
        <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
      </Spinner>

  );
};
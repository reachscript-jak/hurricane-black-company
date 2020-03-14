import React, { useContext } from 'react';
import { Dimmer } from 'semantic-ui-react';
import { PacmanLoader } from 'react-spinners';

import { LoadingContext } from '../../Router';

const LoadingWithDimmer = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <Dimmer active={loading} page>
      <PacmanLoader size={30} color={'#00796b'} />
    </Dimmer>
  );
};

export default LoadingWithDimmer;

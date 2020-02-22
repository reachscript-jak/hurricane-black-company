import React from 'react';
import { Container, Image } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLogo = () => {
  const history = useHistory();

  const onClickToTop = () => history.push('/');

  return (
    <Container fluid style={{ backgroundColor: '#00796b' }}>
      <ImageLogo src={`${process.env.PUBLIC_URL}/img/haribura.png`} centered size="big" onClick={onClickToTop} />
    </Container>
  );
};

const ImageLogo = styled(Image)`
  &:hover {
    cursor: pointer;
  }
`;

export default HeaderLogo;

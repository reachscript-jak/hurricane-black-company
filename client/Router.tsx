import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';
import styled from 'styled-components';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <SCcontainer>
      <Container fluid style={{ backgroundColor: '#00796b' }}>
        <Image src={`${process.env.PUBLIC_URL}/img/haribura.png`} centered size="big" />
      </Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/detail" children={<Detail />} />
        </Switch>
      </BrowserRouter>
    </SCcontainer>
  );
};

const SCcontainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cefff9;
`;

export default Router;

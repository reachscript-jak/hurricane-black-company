import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container, Image } from 'semantic-ui-react';

import Home from './pages/Home';
import Detail from './pages/Detail';

const Router = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: '#00796b' }}>
        <Image src={`${process.env.PUBLIC_URL}/img/haribura.png`} centered size="big" />
      </Container>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/detail" children={<Detail />} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;

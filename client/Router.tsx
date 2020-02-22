import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HeaderLogo from './components/atoms/HeaderLogo';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Post from './components/pages/Post';

const Router = () => {
  return (
    <SCcontainer>
      <BrowserRouter>
        <HeaderLogo />
        <Switch>
          <Route path="/" exact children={<Home />} />
          <Route path="/detail/:id" children={<Detail />} />
          <Route path="/post" children={<Post />} />
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

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import HeaderLogo from './components/atoms/HeaderLogo';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Post from './components/pages/Post';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '30px',
  transition: transitions.SCALE,
};

const Router = () => {
  return (
    <SCcontainer>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <BrowserRouter>
          <HeaderLogo />
          <Switch>
            <Route path="/" exact children={<Home />} />
            <Route path="/detail/:id" children={<Detail />} />
            <Route path="/post" children={<Post />} />
          </Switch>
        </BrowserRouter>
      </AlertProvider>
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

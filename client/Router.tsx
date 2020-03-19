import React, { createContext, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import HeaderLogo from './components/atoms/HeaderLogo';
import LoadingWithDimmer from './components/molecules/LoadingWithDimmer';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Post from './components/pages/Post';
import { Loading } from './types/context';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '30px',
  transition: transitions.SCALE,
};

export const LoadingContext = createContext<Loading>({ loading: false, setLoading: () => {} });

const Router = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SCcontainer>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <BrowserRouter>
            <HeaderLogo />
            <LoadingWithDimmer />
            <Switch>
              <Route path="/" exact children={<Home />} />
              <Route path="/detail/:id" children={<Detail />} />
              <Route path="/post" children={<Post />} />
            </Switch>
          </BrowserRouter>
        </LoadingContext.Provider>
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

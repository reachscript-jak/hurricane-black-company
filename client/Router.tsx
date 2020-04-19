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
import { Loading, SearchKeyword } from './types/context';

const alertOptions = {
  position: positions.TOP_CENTER,
  timeout: 4000,
  offset: '30px',
  transition: transitions.SCALE,
};

export const LoadingContext = createContext<Loading>({ loading: false, setLoading: () => {} });
export const SearchKeywordContext = createContext<SearchKeyword>({ keyword: '', setKeyword: () => {} });

const Router = () => {
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState('');

  return (
    <SCcontainer>
      <AlertProvider template={AlertTemplate} {...alertOptions}>
        <LoadingContext.Provider value={{ loading, setLoading }}>
          <SearchKeywordContext.Provider value={{ keyword, setKeyword }}>
            <BrowserRouter>
              <HeaderLogo />
              <LoadingWithDimmer />
              <Switch>
                <Route path="/" exact children={<Home />} />
                <Route path="/detail/:id" children={<Detail />} />
                <Route path="/post" children={<Post />} />
              </Switch>
            </BrowserRouter>
          </SearchKeywordContext.Provider>
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
